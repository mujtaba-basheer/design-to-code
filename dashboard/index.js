const mobNav = document.querySelector(".nav-mobile");
const menu = document.querySelector(".hamburger");
const arrow = document.querySelector(".nav-close");
const arrowImg = document.querySelector(".hamburger img");

const toggleMenu = (ev) => {
  ev.preventDefault();
  if (window.innerWidth > 1000) return;
  mobNav.classList.toggle("nav-open");
};

window.addEventListener("click", (ev) => {
  if (
    mobNav.classList.contains("nav-open") &&
    !mobNav.contains(ev.target) &&
    ev.target !== arrowImg
  )
    mobNav.classList.remove("nav-open");
});

menu.addEventListener("click", toggleMenu);

arrow.addEventListener("click", toggleMenu);
