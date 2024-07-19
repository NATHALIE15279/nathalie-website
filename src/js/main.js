const menu_btn = document.getElementById("btnOpenMenu");

const menu_btn__bars = document.getElementById("bars");
const menu_btn__cross = document.getElementById("cross");

const menu_responsive = document.getElementById("menuResponsive");

menu_responsive.classList.add("hidden");

function showMenu() {
  menu_responsive.classList.toggle("hidden");
  menu_btn__bars.classList.toggle("hidden");
  menu_btn__cross.classList.toggle("hidden");
}

menu_btn.addEventListener("click", () => {
  showMenu();
});
