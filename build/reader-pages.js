// PyTB — paginated reader (two modes).
//
// Walks the rendered book content and packs it into fixed-height "page cards"
// at A4-equivalent intervals.
//
// Two presentation modes, selected by document.body.dataset.readerMode:
//   "word"  — Word/Google-Docs style: every page card is visible, stacked
//             with gaps. The user scrolls between them. Each card looks
//             like a real piece of paper.
//   "paged" — Single-page reader: only the active page card is visible,
//             navigated with on-screen buttons + arrow keys + Home/End.

(function () {
  if (window.__pytbPagedInit) return;
  window.__pytbPagedInit = true;

  const A4_ASPECT = 1.454; // 253 / 174 (content area after 18/22mm margins)

  function ready() {
    return new Promise((res) => {
      if (document.readyState !== "loading") res();
      else document.addEventListener("DOMContentLoaded", res);
    });
  }

  ready().then(async () => {
    if (document.fonts && document.fonts.ready) {
      try { await document.fonts.ready; } catch (_) {}
    }
    setup();
  });

  function setup() {
    const container = document.querySelector(".book-page");
    if (!container) return;

    const mode = (document.body.dataset.readerMode === "paged") ? "paged" : "word";

    // Strip the topnav (we'll provide our own navigation if needed).
    container.querySelectorAll(".topnav").forEach(n => n.remove());

    // Flatten the content into a stream of paginable items + forced breaks.
    const items = flatten(container);

    // Compute target page height from current column width.
    const cw = container.getBoundingClientRect().width || 820;
    const pageHeight = Math.max(800, Math.round(cw * A4_ASPECT));

    // Wipe the container (we'll rebuild with page-card divs).
    container.innerHTML = "";

    // Build pages.
    const pages = paginate(items, pageHeight, container);

    // Number each page card (small label in bottom-right corner).
    pages.forEach((p, i) => {
      p.dataset.pageNum = String(i + 1);
      const num = document.createElement("div");
      num.className = "book-page-num";
      num.textContent = `${i + 1} / ${pages.length}`;
      p.appendChild(num);
    });

    if (mode === "paged") initPaged(pages);
    else                  initWord(pages);
  }

  // ----------------------------------------------------------------
  // Flatten the book DOM into an ordered list of paginable items.
  // Sections like .chapter-section act as forced page breaks; their
  // children are paginated individually.
  // ----------------------------------------------------------------
  function flatten(container) {
    const items = [];
    const SECTION_SELECTOR = ".chapter-section, .appendix-section, .book-toc, .book-end, .book-cover";

    for (const child of Array.from(container.children)) {
      if (child.matches(".book-cover")) {
        // The cover is its own atomic page (fills the card).
        items.push({ kind: "page-break", soft: false });
        items.push({ kind: "atomic-cover", el: child });
        items.push({ kind: "page-break", soft: false });
      } else if (child.matches(SECTION_SELECTOR)) {
        // Force a new page before each section, then walk inside.
        items.push({ kind: "page-break", soft: false });
        // Carry the section's class so we can re-apply it to page cards
        // containing this section's content (used for .appendix-section).
        const carriedClass = child.matches(".appendix-section") ? "appendix-section" : "";
        for (const inner of Array.from(child.children)) {
          items.push({ kind: "block", el: inner, carriedClass });
        }
      } else {
        items.push({ kind: "block", el: child, carriedClass: "" });
      }
    }
    return items;
  }

  // ----------------------------------------------------------------
  // Pagination: pack items into page cards of approx pageHeight.
  // An element that doesn't fit gets moved to a fresh page. An element
  // taller than a whole page sits on its own card (which grows past
  // pageHeight) — common for very long code blocks.
  // ----------------------------------------------------------------
  function newPageCard() {
    const card = document.createElement("article");
    card.className = "book-page-card";
    return card;
  }

  function paginate(items, pageHeight, container) {
    const pages = [];
    let current = newPageCard();
    pages.push(current);
    container.appendChild(current);

    function startNewPage() {
      current = newPageCard();
      pages.push(current);
      container.appendChild(current);
    }

    for (const item of items) {
      if (item.kind === "page-break") {
        // Only break if the current page has content; collapses consecutive breaks.
        if (current.children.length > 0) startNewPage();
        continue;
      }

      if (item.kind === "atomic-cover") {
        if (current.children.length > 0) startNewPage();
        current.classList.add("book-page-card--cover");
        current.appendChild(item.el);
        startNewPage();
        continue;
      }

      // kind === "block"
      if (item.carriedClass) current.classList.add(item.carriedClass);
      current.appendChild(item.el);

      if (current.getBoundingClientRect().height > pageHeight && current.children.length > 1) {
        current.removeChild(item.el);
        startNewPage();
        if (item.carriedClass) current.classList.add(item.carriedClass);
        current.appendChild(item.el);
      }
    }

    // Drop a trailing empty page if any.
    if (pages.length > 1 && pages[pages.length - 1].children.length === 0) {
      container.removeChild(pages[pages.length - 1]);
      pages.pop();
    }
    return pages;
  }

  // ----------------------------------------------------------------
  // Mode: WORD (visible stacked cards, scroll between them)
  // ----------------------------------------------------------------
  function initWord(pages) {
    document.body.classList.add("reader-mode-word");

    // Reuse existing reader.js helpers (progress bar / chapter pill) if loaded.
    // Inject lightweight chapter pill driven by the cards themselves.
    addChapterPill(pages);
  }

  // Watch which page card is currently in view and update a top-left pill
  // with the chapter title it carries (data-running-title on a descendant).
  function addChapterPill(pages) {
    const pill = document.createElement("div");
    pill.className = "reader-chapter-pill";
    pill.setAttribute("data-empty", "");
    document.body.appendChild(pill);

    function titleForCard(card) {
      const owner = card.querySelector("[data-running-title]");
      if (owner) return owner.dataset.runningTitle;
      return "";
    }

    // Use IntersectionObserver to find which card's top is near viewport.
    let lastTitle = "";
    function update() {
      let bestTitle = "";
      const vh = window.innerHeight;
      for (const card of pages) {
        const r = card.getBoundingClientRect();
        if (r.top <= vh * 0.25 && r.bottom > 0) {
          const t = titleForCard(card);
          if (t) bestTitle = t;
        }
      }
      if (bestTitle !== lastTitle) {
        lastTitle = bestTitle;
        if (bestTitle) {
          pill.textContent = bestTitle;
          pill.removeAttribute("data-empty");
        } else {
          pill.setAttribute("data-empty", "");
        }
      }
    }

    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; update(); });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  // ----------------------------------------------------------------
  // Mode: PAGED (one card at a time, nav buttons + arrow keys)
  // ----------------------------------------------------------------
  function initPaged(pages) {
    document.body.classList.add("reader-mode-paged");

    let active = 0;
    const total = pages.length;

    pages.forEach((p, i) => {
      p.style.display = i === 0 ? "" : "none";
    });

    // Build controls
    const controls = document.createElement("div");
    controls.className = "paged-controls";
    controls.innerHTML = `
      <button class="paged-btn paged-first" aria-label="first page" title="Home">&laquo;</button>
      <button class="paged-btn paged-prev"  aria-label="previous page" title="Arrow Left">&lsaquo;</button>
      <div class="paged-indicator">page <span class="paged-cur">1</span> <span class="paged-of">of</span> <span class="paged-total">${total}</span></div>
      <button class="paged-btn paged-next"  aria-label="next page" title="Arrow Right">&rsaquo;</button>
      <button class="paged-btn paged-last"  aria-label="last page" title="End">&raquo;</button>
    `;
    document.body.appendChild(controls);

    const cur = controls.querySelector(".paged-cur");

    function goto(i) {
      const ni = Math.max(0, Math.min(total - 1, i));
      if (ni === active) return;
      pages[active].style.display = "none";
      pages[ni].style.display = "";
      active = ni;
      cur.textContent = String(active + 1);
      window.scrollTo({ top: 0, behavior: "auto" });
      updateButtons();
    }

    function updateButtons() {
      controls.querySelector(".paged-prev").disabled  = (active === 0);
      controls.querySelector(".paged-first").disabled = (active === 0);
      controls.querySelector(".paged-next").disabled  = (active === total - 1);
      controls.querySelector(".paged-last").disabled  = (active === total - 1);
    }

    controls.querySelector(".paged-prev").addEventListener("click",  () => goto(active - 1));
    controls.querySelector(".paged-next").addEventListener("click",  () => goto(active + 1));
    controls.querySelector(".paged-first").addEventListener("click", () => goto(0));
    controls.querySelector(".paged-last").addEventListener("click",  () => goto(total - 1));

    document.addEventListener("keydown", (e) => {
      const tag = (e.target.tagName || "").toUpperCase();
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          goto(active + 1); e.preventDefault(); break;
        case "ArrowLeft":
        case "PageUp":
          goto(active - 1); e.preventDefault(); break;
        case "Home":
          goto(0); e.preventDefault(); break;
        case "End":
          goto(total - 1); e.preventDefault(); break;
      }
    });

    updateButtons();
  }
})();
