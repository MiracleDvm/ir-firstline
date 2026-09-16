/* Wraps the decision tree's Mermaid diagram in its own scroll container,
   separate from the <details class="note"> box around it. This has to be
   done here rather than in the markdown/HTML directly: pymdownx.details
   nests content 4 spaces deep, and md_in_html's raw-HTML-block detection
   doesn't reliably pick up a <div markdown="block"> at that indentation
   (tested — the markdown attribute just leaks into the output unprocessed).
   The split matters for CSS reasons: overflow-x on <details> itself would
   make it a scroll container (per the CSS overflow spec, giving one axis a
   non-visible value forces the other to compute as "auto" too), which
   breaks the collapse bar's position:sticky — sticky resolves relative to
   the nearest such container, so it would stick to <details>'s own
   (never-actually-scrolling) box instead of the page. A dedicated wrapper
   keeps that scrolling context off of <details> entirely. */
(function () {
  if (typeof document$ === "undefined") return;

  document$.subscribe(function () {
    document.querySelectorAll(".md-typeset details.note").forEach(function (details) {
      function tryWrap() {
        var target = details.querySelector(":scope > pre.mermaid, :scope > div.mermaid");
        if (!target) return false;
        if (target.parentElement && target.parentElement.classList.contains("irf-mermaid-scroll")) {
          return true;
        }
        var wrapper = document.createElement("div");
        wrapper.className = "irf-mermaid-scroll";
        target.replaceWith(wrapper);
        wrapper.appendChild(target);
        return true;
      }

      if (tryWrap()) return;

      try {
        var observer = new MutationObserver(function () {
          if (tryWrap()) observer.disconnect();
        });
        observer.observe(details, { childList: true });
      } catch (e) {
        /* fail silently — worst case the diagram keeps shrinking to the
           column width instead of scrolling, same as before this fix */
      }
    });
  });
})();
