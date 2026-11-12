(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  // Light the rail segment for the layer currently being read.
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail a[href^="#"]'));
  var stops = links
    .map(function (a) { return { a: a, el: document.getElementById(a.getAttribute("href").slice(1)) }; })
    .filter(function (s) { return s.el; });
  var ground = document.getElementById("background");
  if (ground) stops.splice(stops.length - 1, 0, { a: null, el: ground });

  function update() {
    var probe = window.innerHeight * 0.4;
    var current = null;
    stops.forEach(function (s) {
      if (s.el.getBoundingClientRect().top <= probe) current = s;
    });
    // the contact block can be too short to reach the probe line
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = stops[stops.length - 1];
    }
    links.forEach(function (a) {
      if (current && a === current.a) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
