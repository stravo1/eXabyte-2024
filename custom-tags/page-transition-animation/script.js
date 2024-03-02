const transitionWrapper =
  document.getElementsByClassName("transition-wrapper")[0];
var routesLinks =
  document.getElementsByClassName("routes-mobile")[0].childNodes;
var routesLinksDesktopGroup1 = document.querySelector(
  ".desktop .nav-group-1"
).childNodes;
var routesLinksDesktopGroup2 = document.querySelector(
  ".desktop .nav-group-2"
).childNodes;

var homeIconDesktop = document.querySelector(".desktop .logo-holder")
var homeIconMobile = document.querySelector(".mobile .logo-holder")

homeIconDesktop.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  if ("/" == path || path == "/index.html") {
    closeMenu();
    return;
  }
  localStorage.setItem("playTransitionAnimation", true);
  transitionWrapper.classList.remove("transition-invisible");
  transitionWrapper.classList.add("transition-visible");
  setTimeout(() => {
    window.location.href = (`/`);
  }, 250);
});

homeIconMobile.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  if ("/" == path || path == "/index.html") {
    closeMenu();
    return;
  }
  localStorage.setItem("playTransitionAnimation", true);
  transitionWrapper.classList.remove("transition-invisible");
  transitionWrapper.classList.add("transition-visible");
  setTimeout(() => {
    window.location.href = (`/`);
  }, 250);
});

routesLinks.forEach((node) => {
  node.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (`/${node.id}/` == path) {
      closeMenu();
      return;
    } else if (node.id == "home" && path == "/") {
      closeMenu();
      return;
    }
    localStorage.setItem("playTransitionAnimation", true);
    transitionWrapper.classList.remove("transition-invisible");
    transitionWrapper.classList.add("transition-visible");
    setTimeout(() => {
      window.location.href = (`/${node.id == "home" ? "" : node.id}`);
    }, 250);
  });
});

routesLinksDesktopGroup1.forEach((node) => {
  node.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    let nodePath = node.id.split("-")[0];
    console.log(nodePath);
    // return
    if (`/${nodePath}/` == path) {
      closeMenu();
      return;
    } else if (nodePath == "home" && path == "/") {
      closeMenu();
      return;
    }
    localStorage.setItem("playTransitionAnimation", true);
    transitionWrapper.classList.remove("transition-invisible");
    transitionWrapper.classList.add("transition-visible");
    setTimeout(() => {
      window.location.href = (`/${nodePath == "home" ? "" : nodePath}`);
    }, 250);
  });
});

routesLinksDesktopGroup2.forEach((node) => {
  node.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    let nodePath = node.id.split("-")[0];
    if (`/${nodePath}/` == path) {
      closeMenu();
      return;
    } else if (nodePath == "home" && path == "/") {
      closeMenu();
      return;
    }
    localStorage.setItem("playTransitionAnimation", true);
    transitionWrapper.classList.remove("transition-invisible");
    transitionWrapper.classList.add("transition-visible");
    setTimeout(() => {
      window.location.href = (`/${nodePath == "home" ? "" : nodePath}`);
    }, 250);
  });
});

let pageLoaded = false;

window.addEventListener("load", () => {
  pageLoaded = true;
  localStorage.removeItem("playTransitionAnimation");
  setTimeout(() => {
    transitionWrapper.classList.add("transition-invisible");
    transitionWrapper.classList.remove("transition-visible");
  }, 250);
})

window.addEventListener("pageshow", () => {
  if (!pageLoaded) {
    return
  }
  console.log("pageshow");
  closeMenu()
  setTimeout(() => {
    transitionWrapper.classList.add("transition-invisible");
    transitionWrapper.classList.remove("transition-visible");
  }, 250);
})
