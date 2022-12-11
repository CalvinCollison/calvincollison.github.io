const ham = document.querySelector(".ham");
const menuX = document.querySelector(".menuX");
const overlay = document.querySelector(".overlay");
const sideNav = document.querySelector(".sideNav");

ham.addEventListener("click", toggleHamburger);
menuX.addEventListener("click", toggleHamburger);
overlay.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    console.log("click");
    overlay.classList.toggle("showOverlay");
    sideNav.classList.toggle("showNav");
}