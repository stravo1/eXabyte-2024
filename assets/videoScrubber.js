// https://www.pexels.com/video/dark-substance-moving-around-10994873/


let video = document.querySelector(".mobile video");
let videoDesktop = document.querySelector(".desktop video");

let mobileWrapper = document.querySelector(".mobile");
let desktopWrapper = document.querySelector(".desktop");

video.currentTime = 0.1
let playBackwardsOnMobile = false;
function playBackward() {
  if (videoDesktop.currentTime == 0) return;
  setTimeout(() => {
    video.currentTime =
      (video.currentTime - 0.15).toFixed(2) < video.currentTime
        ? (video.currentTime - 0.15).toFixed(2)
        : video.currentTime;
    console.log(video.currentTime);
    promise = false;
  }, 75);
}

function playForward() {
  if (video.ended) return;
  setTimeout(() => {
    video.currentTime =
      (video.currentTime + 0.15).toFixed(2) > video.currentTime
        ? (video.currentTime + 0.15).toFixed(2)
        : video.currentTime;
    console.log(video.currentTime);
    promise = false;
  }, 75);
}

let promise;
let lastScrollPos;
video.currentTime = 0.5;
mobileWrapper.addEventListener("scroll", async () => {
  if (promise) return;
  // if (video.currentTime == 0 || video.currentTime == video.duration) {
  //   playBackwardsOnMobile = !playBackwardsOnMobile;
  // }
  if (video.currentTime == video.duration) {
    video.currentTime = 0;
  }
  promise = true;
  // if (lastScrollPos > mobileWrapper.scrollTop) {
  //   console.log("scrolling back");
  //   if (playBackwardsOnMobile) {
  //     console.log("playing forward");
  //     playForward();
  //   } else {
  //     playBackward();
  //   }
  // } else {
  //   if (playBackwardsOnMobile) {
  //     playBackward();
  //   } else {
  //     playForward();
  //   }
  // }
  playForward()
  lastScrollPos = mobileWrapper.scrollTop;
});

let promiseDesktop = false;
let lastScrollPosDesktop;
let playBackwards = false;
videoDesktop.currentTime = 0.1;
function playBackwardDesktop() {
  if (videoDesktop.currentTime == 0) return;
  setTimeout(() => {
    videoDesktop.currentTime =
      (videoDesktop.currentTime - 0.25).toFixed(2) < videoDesktop.currentTime
        ? (videoDesktop.currentTime - 0.25).toFixed(2)
        : videoDesktop.currentTime;
    console.log(videoDesktop.currentTime);
    promiseDesktop = false;
  }, 75);
}

function playForwardDesktop() {
  if (videoDesktop.ended) return;
  setTimeout(() => {
    videoDesktop.currentTime =
      (videoDesktop.currentTime + 0.2).toFixed(2) > videoDesktop.currentTime
        ? (videoDesktop.currentTime + 0.2).toFixed(2)
        : videoDesktop.currentTime;
    console.log(videoDesktop.currentTime);
    promiseDesktop = false;
  }, 75);
}
desktopWrapper.addEventListener("scroll", async () => {
  if (promiseDesktop) return;
  if (videoDesktop.currentTime == videoDesktop.duration) {
    videoDesktop.currentTime = 0;
  }
  promiseDesktop = true;
  // if (lastScrollPosDesktop > desktopWrapper.scrollTop) {
  //   console.log("scrolling back");
  //   if (playBackwards) {
  //     console.log("playing forward");
  //     playForwardDesktop();
  //   } else {
  //     playBackwardDesktop();
  //   }
  // } else {
  //   if (playBackwards) {
  //     playBackwardDesktop();
  //   } else {
  //     playForwardDesktop();
  //   }
  // }
  playForwardDesktop();
  lastScrollPosDesktop = desktopWrapper.scrollTop;
});

