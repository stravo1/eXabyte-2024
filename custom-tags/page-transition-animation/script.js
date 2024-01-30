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
      window.location.replace(`/${node.id == "home" ? "" : node.id}`);
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
      window.location.replace(`/${nodePath == "home" ? "" : nodePath}`);
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
      window.location.replace(`/${nodePath == "home" ? "" : nodePath}`);
    }, 250);
  });
});


let minimumTimePassed = false;
let videoLoaded = false;
let imagesLoaded = false;

function isMobile() {
  return window.innerWidth <= 768; // You can adjust this threshold based on your design
}

function fetchDataAndCache() {
  let resolution = isMobile() ? 'mobile' : 'desktop';
  let url = resolution === 'desktop' ? 'output-3.mp4' : 'output-4.mp4';

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/assets/videos/" + url, true); // Replace 'example.bin' with the actual URL of your binary data.
  xhr.responseType = "arraybuffer";

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = xhr.response;
      try {
        caches.open('my-cache')
          .then(cache => {
            const cacheKey = `video-${resolution}`;
            const response = new Response(data);
            cache.put(cacheKey, response);
          });
      } catch (err) {
        console.log(err);
      }

      // Set the ArrayBuffer data as the video source
      const videoPlayer = document.querySelector('.desktop video');
      videoPlayer.src = URL.createObjectURL(new Blob([data], { type: "video/mp4" }));
      videoLoaded = true;
      if (imagesLoaded) {
        closeTransition();
      }
    } else {
      console.error("Error fetching data:", xhr.statusText);
    }
  };
  xhr.onprogress = function (oEvent) {
    // if (oEvent.lengthComputable) {
    //   var percentComplete = oEvent.loaded / oEvent.total;
    //   console.log(percentComplete);
    //   percentLoadedText.innerHTML = `${Math.round(percentComplete * 100)}%`;
    // }
  };

  xhr.send();
}

function retrieveDataFromCache() {
  let resolution = isMobile() ? 'mobile' : 'desktop';

  try {// Retrieve the ArrayBuffer data from the cache
    caches.open('my-cache')
      .then(cache => {
        const cacheKey = `video-${resolution}`;
        return cache.match(cacheKey);
      })
      .then(async (response) => {
        if (response) {
          let arrayBuffer = await response.arrayBuffer();
          if (!arrayBuffer) {
            fetchDataAndCache();
            return;
          }
          const videoPlayer = document.querySelector(isMobile() ? '.mobile' : '.desktop' + ' video');
          videoPlayer.src = URL.createObjectURL(new Blob([arrayBuffer]));
          videoLoaded = true;
          if (imagesLoaded) {
            closeTransition();
          }
        } else {
          // If data is not in cache, fetch and cache it
          fetchDataAndCache();
        }
      })
      .catch(error => console.error('Error retrieving data from cache:', error));
  } catch (err) {
    console.log(err);
    fetchDataAndCache();
  }
}

// Use this function to load the video from cache or fetch it and cache it
if (!(window.location.pathname == "/" || window.location.pathname == "/index.html")) {
  retrieveDataFromCache();
} else {
  videoLoaded = true;
}

function closeTransition() {
  setTimeout(() => {
    transitionWrapper.classList.add("transition-invisible");
    transitionWrapper.classList.remove("transition-visible");
  }, 250);
}

window.addEventListener("load", () => {
  console.log(100);
  if (videoLoaded) {
    closeTransition();
  } else {
    imagesLoaded = true;
  }
})