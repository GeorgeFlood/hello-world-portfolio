const faders = document.querySelectorAll(".fade-in");
const header = document.querySelector(".header__nav");
const sectionOne = document.querySelector(".header");
const mobileMenu = document.querySelector(".header__mobile--icon");
const mobileMenuBtn = document.querySelector(".header__mobile--nav");
const mobileMenuBG = document.querySelector(".header__mobile--nav");

//////////////////////
///contact form elements
const sendBtn = document.querySelector("#send");
const contactTitle = document.getElementById("contactID");
const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const contactMessage = document.getElementById("message");
//////////////////////
//nav bar

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

//////////////////////
///lazy animations

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
  mobileMenuBG.classList.toggle("is-active");
});

mobileMenuBtn.addEventListener("click", (e) => {
  const target = e.target.classList;

  const isActive = document.querySelector(".is-active");
  if (
    target.contains("header__mobile--items") ||
    target.contains("is-active")
  ) {
    mobileMenu.classList.toggle("is-active");
    mobileMenuBG.classList.toggle("is-active");
  }
  return isActive;
});

////////////////////////////////////////////
//contact form functions

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_87zdrt4", "template_q5c3dnf", params)
    .then(function (res) {
      alert("success " + res.status);
    });
}

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendMail();
  contactTitle.classList.add("thank--you");
  contactTitle.textContent = "Thank you!";
  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
});
