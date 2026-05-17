// PyTB — in-browser reader helpers.
// Adds a top progress bar, a current-chapter pill, a "page N / total" chip,
// AND faint horizontal dividers with "page N" labels at A4-equivalent
// intervals so the long page reads like a real book.
// All of these auto-hide under @media print.

(function () {
  if (window.__pytbReaderInit) return;
  window.__pytbReaderInit = true;

  // A4 portrait content area is roughly 174mm wide × 253mm tall (with the
  // 18mm side / 22mm top-bottom margins this site prints with). Aspect
  // ratio 253/174 ≈ 1.454 — we use that to derive a "page height" from
  // whatever column width we are displayed at.
  const A4_CONTENT_ASPECT = 1.454;

  function setup() {
    const container = document.querySelector(".book-page") || document.querySelector(".page");
    if (!container) return;

    // Compute the column width and the equivalent A4 page height.
    function pageHeightFor() {
      const cw = container.getBoundingClientRect().width;
      return Math.max(600, Math.round(cw * A4_CONTENT_ASPECT));
    }

    // Skip on short pages (no scary scroll).
    if (document.documentElement.scrollHeight < window.innerHeight * 1.5) return;

    // ----- Progress bar (top) -----
    const bar = document.createElement("div");
    bar.className = "reader-progress";
    bar.innerHTML = '<div class="reader-progress-fill"></div>';
    document.body.appendChild(bar);
    const fill = bar.querySelector(".reader-progress-fill");

    // ----- Chapter pill (top-left) -----
    const pill = document.createElement("div");
    pill.className = "reader-chapter-pill";
    pill.setAttribute("data-empty", "");
    document.body.appendChild(pill);

    // ----- Page chip (bottom-right) -----
    const chip = document.createElement("div");
    chip.className = "reader-page-chip";
    document.body.appendChild(chip);

    // Make the container a positioning context for the absolutely-positioned
    // page-break markers.
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }

    const sections = Array.from(document.querySelectorAll("[data-running-title]"));

    let totalPages = 1;
    let pageH = pageHeightFor();

    function placeMarkers() {
      // Remove existing markers (we may be re-running on resize).
      container.querySelectorAll(".page-break-marker").forEach(n => n.remove());

      pageH = pageHeightFor();
      const containerHeight = container.scrollHeight;
      totalPages = Math.max(1, Math.ceil(containerHeight / pageH));

      // We don't put a marker at the very top of the container — the first
      // page starts there implicitly. So we draw markers between pages 1→2,
      // 2→3, ..., (N-1)→N.
      for (let i = 1; i < totalPages; i++) {
        const marker = document.createElement("div");
        marker.className = "page-break-marker";
        marker.style.top = (i * pageH) + "px";

        const label = document.createElement("span");
        label.className = "page-break-label";
        label.textContent = `page ${i + 1}`;
        marker.appendChild(label);

        container.appendChild(marker);
      }
    }

    function compute() {
      const sh = document.documentElement.scrollHeight;
      const vh = window.innerHeight;
      const y  = window.scrollY;

      // Page count uses container-relative scroll position so it matches
      // the dividers exactly. The container starts at offsetTop≈30 inside
      // the body but for practical reading position we use viewport scroll.
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const yRel = Math.max(0, y - containerTop);
      const currentPage = Math.min(totalPages, Math.floor(yRel / pageH) + 1);
      chip.textContent = `page ${currentPage} / ${totalPages}`;

      // Progress bar (uses true document scroll for accuracy)
      const max = Math.max(1, sh - vh);
      const ratio = Math.min(1, Math.max(0, y / max));
      fill.style.width = (ratio * 100).toFixed(2) + "%";

      // Chapter pill
      let active = "";
      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        if (rect.top <= vh * 0.25) active = s.dataset.runningTitle || active;
      }
      if (active) {
        pill.textContent = active;
        pill.removeAttribute("data-empty");
      } else {
        pill.setAttribute("data-empty", "");
      }
    }

    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; compute(); });
    }

    let resizeTimer;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        placeMarkers();
        compute();
      }, 120);
    }

    placeMarkers();
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Re-place markers once web fonts have settled and images are loaded
    // (content height can shift slightly).
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        placeMarkers();
        compute();
      });
    }
    window.addEventListener("load", () => {
      placeMarkers();
      compute();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
