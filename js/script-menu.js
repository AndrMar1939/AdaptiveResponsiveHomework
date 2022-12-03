
let menuBtn = document.querySelector(".menu-btn");
let navBar = document.querySelector(".nav-bar");
let logoAdaptive = document.querySelector(".logo-adaptive");
let navItem = document.querySelector(".nav-item");

// events

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  navBar.classList.toggle("active");
  logoAdaptive.classList.toggle("active");
});

navItem.addEventListener("click", function () {
  menuBtn.classList.remove("active");
  navBar.classList.remove("active");
  logoAdaptive.classList.remove("active");
});
