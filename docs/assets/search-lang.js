/* IR Firstline — search results are built from one combined EN+FR index
   (by design, so a single search box can find either language). Material's
   stock renderer doesn't prioritize the current page's language, so a
   French visitor searching a term that also appears in the English pages
   can see English results dominate. This reorders the already-rendered
   result list to put same-language matches first — it never removes or
   filters anything, only changes the order. */
(function () {
  if (typeof document$ === "undefined") return;

  document$.subscribe(function () {
    var list = document.querySelector(".md-search-result__list");
    if (!list) return;

    var currentLang = document.documentElement.lang === "fr" ? "fr" : "en";

    function itemIsFr(li) {
      var link = li.querySelector(".md-search-result__link");
      var href = link && link.getAttribute("href");
      if (!href) return false;
      try {
        var path = new URL(href, window.location.href).pathname;
        return /\/fr\//.test(path) || /\/fr$/.test(path);
      } catch (e) {
        return false;
      }
    }

    function reorder() {
      var items = Array.prototype.slice.call(list.children).filter(function (el) {
        return el.tagName === "LI";
      });
      if (items.length < 2) return;

      var matching = items.filter(function (li) {
        return itemIsFr(li) === (currentLang === "fr");
      });
      var other = items.filter(function (li) {
        return itemIsFr(li) !== (currentLang === "fr");
      });
      if (!matching.length || !other.length) return;

      var frag = document.createDocumentFragment();
      matching.concat(other).forEach(function (li) {
        frag.appendChild(li);
      });
      list.appendChild(frag);
    }

    try {
      var observer = new MutationObserver(function () {
        observer.disconnect();
        reorder();
        observer.observe(list, { childList: true });
      });
      observer.observe(list, { childList: true });
    } catch (e) {
      /* fail silently — worst case, results keep their default order */
    }
  });
})();
