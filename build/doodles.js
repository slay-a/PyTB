// Inline SVG doodles. No emojis anywhere — only hand-drawn-style vector art.
// Every doodle is a self-contained SVG string that can be dropped into HTML.

const doodleCorner = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 50 Q 20 30, 40 40 T 70 30" stroke="white" stroke-width="2.2"/>
  <path d="M55 70 L 55 78 L 62 75 L 60 82 L 68 80" stroke="white" stroke-width="2"/>
  <circle cx="20" cy="20" r="2.5" fill="white" stroke="none"/>
  <circle cx="80" cy="60" r="2" fill="white" stroke="none"/>
  <path d="M75 12 L 80 12 M 77.5 9.5 L 77.5 14.5" stroke="white"/>
  <path d="M14 78 L 19 78 M 16.5 75.5 L 16.5 80.5" stroke="white"/>
  <path d="M85 85 Q 88 82, 92 85 T 95 88" stroke="white"/>
</svg>`;

// Icon SVGs for callouts. Stroked, monochrome, inherit currentColor.
const icons = {
  silly: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c1 1 1.5 2 1.5 3.5h5c0-1.5.5-2.5 1.5-3.5A6 6 0 0 0 12 3z"/></svg>`,
  watchout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 L 22 20 L 2 20 Z"/><path d="M12 10 L 12 14"/><circle cx="12" cy="17" r="0.8" fill="currentColor"/></svg>`,
  tip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8 L 12 13"/><circle cx="12" cy="16" r="0.8" fill="currentColor"/></svg>`,
  rule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4 L 19 4 L 19 20 L 5 20 Z"/><path d="M9 9 L 15 9"/><path d="M9 13 L 15 13"/><path d="M9 17 L 13 17"/></svg>`,
  default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7 L 12 12 L 15 14"/></svg>`,
};

module.exports = { doodleCorner, icons };
