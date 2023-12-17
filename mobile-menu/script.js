const menu = document.getElementsByClassName("nav-menu-mobile")[0];
const closeButton = document.getElementsByClassName("close-button")[0];
const path = window.location.pathname;

const home = document.getElementById("home");
const events = document.getElementById("events");
const sponsors = document.getElementById("sponsors");
const magazines = document.getElementById("magazines");
const contact = document.getElementById("contact");
const about = document.getElementById("about");

function openMenu() {
    menu.classList.remove("menu-invisible");
    home.classList.remove("slide-out");
    menu.classList.add("menu-visible");
    home.classList.add("slide-in");
}

function closeMenu() {
    menu.classList.add("menu-invisible");
    home.classList.add("slide-out");
    menu.classList.remove("menu-visible");
    home.classList.remove("slide-in");
}

closeButton.addEventListener("click", closeMenu);

console.log(window.location.pathname);

switch(path){
    case "/":
        home.childNodes[0].classList.add("current-route");
}