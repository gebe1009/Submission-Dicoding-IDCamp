const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-bar");
const menuList = document.getElementById("menu-list");
const buttonBar = document.getElementById("buttonBar");
const bioBiodata = document.getElementById("bio-biodata");

// Navbar Button

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// Profile btn

buttonBar.addEventListener("click", () => {
  bioBiodata.classList.toggle("hiddens");
});

buttonBar.addEventListener("click", () => {
  buttonBar.classList.toggle("rotate");
});

window.onscroll = () => {
  const scrollOn = window.pageYOffset;
  if (scrollOn > 10) {
    nav.style.backgroundColor = "var(--bluenavy)";
    nav.style.boxShadow = "0 2px 15px rgb(0, 0, 0, 0.5)";
    nav.style.transition = "0.2s";
  } else {
    nav.style.backgroundColor = "var(--bluenavy)";
    nav.style.boxShadow = "none";
  }
};
