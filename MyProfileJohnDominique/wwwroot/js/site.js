// Spider Profile — frontend interactions
(function () {
  "use strict";

  /* ---------- Sticky nav shadow + back-to-top visibility ---------- */
  var nav = document.querySelector(".spidey-nav");
  var toTop = document.getElementById("toTop");

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;

    if (nav) {
      nav.classList.toggle("scrolled", y > 40);
    }

    if (toTop) {
      toTop.classList.toggle("show", y > 620);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Scroll-spy navigation ---------- */
  var spyLinks = document.querySelectorAll(".spidey-nav a[data-spy]");

  function updateSpy(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var target = entry.target.id;
        spyLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("data-spy") === target);
        });
      }
    });
  }

  if (spyLinks.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(updateSpy, {
      rootMargin: "-42% 0px -52% 0px",
      threshold: 0
    });

    spyLinks.forEach(function (link) {
      var section = document.getElementById(link.getAttribute("data-spy"));
      if (section) {
        spy.observe(section);
      }
    });
  }

  /* ---------- Web-splat click effect ---------- */
  function isInteractive(target) {
    return target.closest("a, button, input, select, textarea, label, .panel");
  }

  document.addEventListener("click", function (event) {
    if (isInteractive(event.target)) {
      return;
    }

    var splat = document.createElement("span");
    splat.className = "web-splat";
    splat.style.left = event.clientX + "px";
    splat.style.top = event.clientY + "px";
    document.body.appendChild(splat);

    splat.addEventListener("animationend", function () {
      splat.remove();
    });
  });
})();
