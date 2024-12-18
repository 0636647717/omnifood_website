console.log("hi");

// Styles for sticky header
const heroSectionEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    console.log(ent);

    // if (ent.isIntersecting === false) {
    //   document.body.classList.add("sticky");
    // }
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);

obs.observe(heroSectionEl);

// Changing the year to auto

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Dealing with our mobile for the menu to slide in

const buttonEl = document.querySelector(".btn-mobile-nav");
const mainHeaderEl = document.querySelector(".main-header");

buttonEl.addEventListener("click", function () {
  mainHeaderEl.classList.toggle("open-nav");
});
