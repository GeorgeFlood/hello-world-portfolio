const faders = document.querySelectorAll(".fade-in");
const header = document.querySelector(".header__nav");
const sectionOne = document.querySelector(".header");
const mobileMenu = document.querySelector(".header__mobile--icon");
const mobileMenuBtn = document.querySelector(".header__mobile--nav");

const sectionOneOptions = {
  rootMargin: "-240px 0px -0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav--scroll");
    } else {
      header.classList.remove("nav--scroll");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -30px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

mobileMenu.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("is-active");
  document.querySelector(".header__mobile--nav").classList.toggle("is-active");
});

mobileMenuBtn.addEventListener("click", (e) => {
  const target = e.target.classList;

  const isActive = document.querySelector(".is-active");
  if (
    target.contains("header__mobile--items") ||
    target.contains("is-active")
  ) {
    mobileMenu.classList.toggle("is-active");
    document
      .querySelector(".header__mobile--nav")
      .classList.toggle("is-active");
  }
});
