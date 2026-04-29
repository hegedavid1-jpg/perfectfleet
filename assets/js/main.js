const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");
const quoteForm = document.querySelector("[data-quote-form]");
const formNote = document.querySelector("[data-form-note]");
const year = document.querySelector("[data-year]");

if (window.lucide) {
  window.lucide.createIcons();
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });

  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

if (quoteForm && formNote) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Köszönjük, az ajánlatkérés prototípus szerint rögzítve. Éles oldalon innen e-mail vagy CRM bekötés indulhat.";
    formNote.classList.add("is-success");
    quoteForm.reset();
  });
}
