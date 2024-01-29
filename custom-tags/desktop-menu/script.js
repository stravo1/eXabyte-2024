const homeDesktop = document.getElementById("home-desktop");
const eventsDesktop = document.getElementById("events-desktop");
const sponsorsDesktop = document.getElementById("sponsors-desktop");
const magazinesDesktop = document.getElementById("magazines-desktop");
const contactDesktop = document.getElementById("contact-desktop");
const aboutDesktop = document.getElementById("about-desktop");

const navGroup1 = document.getElementsByClassName("nav-group-1")[0]
const navGroup2 = document.getElementsByClassName("nav-group-2")[0]
const navGroupToggleButton = document.getElementsByClassName("nav-group-toggle")[0]

var navGroup1Visible = true;
var navGroupToggled = false;

function makeNavGroup1Visible() {
    navGroup1.classList.add("nav-group-visible");
    navGroup1.classList.remove("nav-group-invisible");
    navGroup2.classList.add("nav-group-invisible");
    navGroup2.classList.remove("nav-group-visible");
}

function makeNavGroup2Visible() {
    navGroup1.classList.remove("nav-group-visible");
    navGroup1.classList.add("nav-group-invisible");
    navGroup2.classList.remove("nav-group-invisible");
    navGroup2.classList.add("nav-group-visible");
}

navGroupToggleButton.addEventListener("click", () => {
    if (navGroup1Visible) {
        makeNavGroup2Visible()
    } else {
        makeNavGroup1Visible()
    }
    if (navGroupToggled) {
        navGroupToggleButton.innerHTML = "more";
    } else {
        navGroupToggleButton.innerHTML = "less";
    }
    navGroup1Visible = !navGroup1Visible;
    navGroupToggled = !navGroupToggled;
})

switch (path) {
    case "/":
        homeDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/events/":
        eventsDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/sponsors/":
        sponsorsDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/magazines/":
        magazinesDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/contact/":
        contactDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/about/":
        aboutDesktop.childNodes[0].classList.add("current-route");
        break;
}

switch (path) {
    case "/":
    case "/events/":
    case "/magazines/":
        navGroup1Visible = true;
        makeNavGroup1Visible()
        break;
    case "/sponsors/":
    case "/contact/":
    case "/about/":
        navGroup1Visible = false;
        makeNavGroup2Visible()
        break;
}

var routesLinks = document.getElementsByClassName("routes-mobile")[0].childNodes
