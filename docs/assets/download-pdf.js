/* Adds a "Download PDF" button to each runbook page (not the hub index, not
   quick-references or templates) and a print-only branded header block.
   No server dependency — it just scopes the browser's native print dialog to
   the already-rendered page, styled by print.css. */
(function () {
  if (typeof document$ === "undefined") return;

  var SHIELD_PATH =
    "M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12z";

  function isRunbookPage() {
    var path = window.location.pathname;
    return /\/runbooks\/[^/]+\/$/.test(path) && !/\/runbooks\/$/.test(path);
  }

  document$.subscribe(function () {
    if (!isRunbookPage()) return;

    var article = document.querySelector(".md-content__inner");
    if (!article || article.querySelector(".irf-print-header")) return;

    var isFr = document.documentElement.lang === "fr";

    var printHeader = document.createElement("div");
    printHeader.className = "irf-print-header";
    printHeader.setAttribute("aria-hidden", "true");
    printHeader.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">' +
      '<path d="' + SHIELD_PATH + '"/></svg>' +
      '<span>IR Firstline</span>';

    var button = document.createElement("button");
    button.type = "button";
    button.className = "irf-download-pdf";
    button.textContent = isFr ? "Télécharger en PDF" : "Download PDF";
    button.addEventListener("click", function () {
      window.print();
    });

    var h1 = article.querySelector("h1");
    if (!h1) return;
    h1.insertAdjacentElement("beforebegin", printHeader);

    var status = article.querySelector("p.irf-status");
    (status || h1).insertAdjacentElement("afterend", button);
  });
})();
