const mobNav = document.querySelector(".nav-mobile");
const menu = document.querySelector(".hamburger");
const arrow = document.querySelector(".nav-close");

menu.addEventListener("click", (ev) => {
  ev.preventDefault();
  mobNav.classList.toggle("nav-open");
});

arrow.addEventListener("click", (ev) => {
  ev.preventDefault();
  mobNav.classList.toggle("nav-open");
});
