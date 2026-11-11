(function () {
  "use strict";

  document.documentElement.classList.add("js");
  document.getElementById("year").textContent = new Date().getFullYear();

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Mobile menu ---- */
  var header = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  function setMenu(open) {
    header.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () { setMenu(!header.classList.contains("open")); });
    header.querySelectorAll("nav a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    document.addEventListener("click", function (e) { if (!header.contains(e.target)) setMenu(false); });
  }

  /* ---- Highlight the current section in the nav ---- */
  var navLinks = document.querySelectorAll(".nav nav a");
  var sections = [];
  navLinks.forEach(function (link) {
    var target = document.querySelector(link.getAttribute("href"));
    if (target) sections.push({ link: link, el: target });
  });
  function updateActive() {
    var probe = window.scrollY + window.innerHeight * 0.35;
    var current = null;
    sections.forEach(function (s) {
      if (s.el.offsetTop <= probe) current = s;
    });
    // the last section can be too short to reach the probe line
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    sections.forEach(function (s) { s.link.classList.toggle("active", s === current); });
  }
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();

  /* ---- Hero oscilloscope: I/Q baseband traces, 90 degrees apart ---- */
  var canvas = document.getElementById("scope");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var w = 0, h = 0, dpr = 1;

  function resize() {
    var rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduceMotion) draw(0);
  }

  function trace(t, phase, color, mid) {
    var amp = Math.min(h * 0.13, 70);
    ctx.beginPath();
    for (var x = 0; x <= w; x += 3) {
      var u = x / 150;
      var envelope = 0.62 + 0.38 * Math.sin(u * 0.35 - t * 0.5);
      var y = mid + amp * envelope * Math.sin(u * 2.4 - t * 1.6 + phase);
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.6;
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  function draw(ms) {
    var t = ms / 1000;
    ctx.clearRect(0, 0, w, h);
    trace(t, 0, "#e0a458", h * 0.36);
    trace(t, Math.PI / 2, "#5fd4a0", h * 0.64);
    if (w < 640) return; // channel labels would sit on top of the text on phones
    ctx.font = "500 11px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#e0a458"; ctx.fillText("CH1  I", w - 76, h * 0.36 - Math.min(h * 0.13, 70) - 10);
    ctx.fillStyle = "#5fd4a0"; ctx.fillText("CH2  Q", w - 76, h * 0.64 - Math.min(h * 0.13, 70) - 10);
  }

  var running = false;
  function loop(ms) {
    if (!running) return;
    draw(ms);
    requestAnimationFrame(loop);
  }
  function start() { if (!running && !reduceMotion) { running = true; requestAnimationFrame(loop); } }
  function stop() { running = false; }

  window.addEventListener("resize", resize);
  resize();

  if (reduceMotion) return;
  // only animate while the hero is on screen and the tab is visible
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !document.hidden) start(); else stop();
    }).observe(canvas);
  } else {
    start();
  }
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });
})();
