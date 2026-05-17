// PyTB — in-browser reader helpers.
// Adds a progress bar, a "page X / Y" chip, and a current-chapter pill.
// One "page" = one screenful, so the chip gives a feel for how much is left.
// All elements auto-hide when @media print is active.

(function () {
  if (window.__pytbReaderInit) return;
  window.__pytbReaderInit = true;

  // Skip on very short pages (no scary scroll).
  function setup() {
    const SHORT_PAGE_RATIO = 1.5; // skip if content is less than 1.5x viewport
    const docHeight = document.documentElement.scrollHeight;
    if (docHeight < window.innerHeight * SHORT_PAGE_RATIO) return;

    // ----- Progress bar (top) -----
    const bar = document.createElement("div");
    bar.className = "reader-progress";
    bar.innerHTML = '<div class="reader-progress-fill"></div>';
    document.body.appendChild(bar);
    const fill = bar.querySelector(".reader-progress-fill");

    // ----- Chapter pill (top left, under the bar) -----
    const pill = document.createElement("div");
    pill.className = "reader-chapter-pill";
    pill.setAttribute("data-empty", "");
    document.body.appendChild(pill);

    // ----- Page chip (bottom right) -----
    const chip = document.createElement("div");
    chip.className = "reader-page-chip";
    document.body.appendChild(chip);

    // Sections that announce a running title via data-running-title="...".
    // The book builder sets this on each chapter / TOC / glossary section.
    const sections = Array.from(document.querySelectorAll("[data-running-title]"));

    function compute() {
      const sh = document.documentElement.scrollHeight;
      const vh = window.innerHeight;
      const y  = window.scrollY;

      // Page chip
      const totalPages   = Math.max(1, Math.ceil(sh / vh));
      const currentPage  = Math.min(totalPages, Math.floor(y / vh) + 1);
      chip.textContent = `page ${currentPage} / ${totalPages}`;

      // Progress bar
      const max = Math.max(1, sh - vh);
      const ratio = Math.min(1, Math.max(0, y / max));
      fill.style.width = (ratio * 100).toFixed(2) + "%";

      // Chapter pill — whichever data-running-title section is closest to
      // the top of the viewport, but not yet scrolled off.
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

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    compute();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
