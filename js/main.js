// Mossgate support site — small JS for smooth-scroll + active-section highlight
(function () {
  "use strict";

  // Smooth scroll for in-page anchors (browsers without native smooth-scroll fallback)
  document.addEventListener("click", function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) history.replaceState(null, "", "#" + id);
  });

  // Highlight the current section in the header nav.
  const navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
  const targets = navLinks
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);
  if (targets.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((a) => {
            a.classList.toggle(
              "is-current",
              a.getAttribute("href") === "#" + id,
            );
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((t) => io.observe(t));
  }
})();