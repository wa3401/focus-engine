// ?theme=dark|light sets data-theme before paint, so a file can be previewed in either theme.
(function () {
  var t = new URLSearchParams(location.search).get("theme");
  if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
})();
