const saveIcons = document.querySelectorAll(".action img");

for (const icon of saveIcons) {
  icon.addEventListener("click", (ev) => {
    let src = ev.target.getAttribute("src");
    ev.target.setAttribute(
      "src",
      src === "assets/save.svg" ? "assets/save-filled.svg" : "assets/save.svg"
    );
  });
}

const menuIcon = document.querySelector(".menu img");
const menuList = document.querySelector(".menu-list");
menuIcon.addEventListener("click", (ev) => {
  menuList.classList.toggle("menu-list-open");
});

window.addEventListener("click", (ev) => {
  if (
    ev.target !== menuIcon &&
    menuList.classList.contains("menu-list-open") &&
    ev.target !== menuList &&
    !menuList.contains(ev.target)
  )
    menuList.classList.remove("menu-list-open");
});
