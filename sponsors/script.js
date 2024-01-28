// REMEMBER TO REMOVE GREYSCALE ON IMAGES
const sponsorDetails = [
  {
    groupName: "Top Sponsors",
    sponsorsArray: [
      {
        name: "Brand Name",
        sponsorType: "Broadband Partner",
        imageSrc: "/assets/images/sponsor-logos/ns_primary_logo.png",
      },
      {
        name: "Brand Name",
        sponsorType: "Study Abroad Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Cybersecurity Training Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
    ],
  },
  {
    groupName: "Broadband Partners",
    sponsorsArray: [
      {
        name: "Brand Name",
        sponsorType: "Broadband Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Broadband Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Broadband Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
    ],
  },
  {
    groupName: "Event Partners",
    sponsorsArray: [
      {
        name: "Brand Name",
        sponsorType: "Event Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Event Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Event Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Event Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Event Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
    ],
  },
  {
    groupName: "Media Partners",
    sponsorsArray: [
      {
        name: "Brand Name",
        sponsorType: "Media Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Media Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
    ],
  },
  {
    groupName: "Food Partners",
    sponsorsArray: [
      {
        name: "Brand Name",
        sponsorType: "Food Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Food Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
    ],
  },
  {
    groupName: "Radio Partners",
    sponsorsArray: [
      {
        name: "Brand Name",
        sponsorType: "Radio Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
      {
        name: "Brand Name",
        sponsorType: "Radio Partner",
        imageSrc:
          "/assets/images/sponsor-logos/official-sponsor-grunge-stamp.jpg",
      },
    ],
  },
];

// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let sponsorSection = this.document.querySelector(".sponsor-items");
let initialTopPaddingForMsg = "10px";

const resetPositions = () => {
  header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
  header.style.fontSize = "2.5rem";
  header.style.position = "sticky";
  header.style.paddingLeft = "40px";
  msg.style.opacity = "1";
  msg.style.paddingTop = initialTopPaddingForMsg;
  topSection.style.height = "45%";
  topSection.style.minHeight = "300px";
  sponsorSection.style.paddingTop = "70px";
  header.classList.remove("transparent-glass-bg-top");
};

document.querySelector(".mobile").addEventListener("scroll", function () {
  let msgPositionFromTop = msg.getBoundingClientRect().top;
  console.log(msgPositionFromTop);
  if (msg.style.paddingTop == "65px") {
    if (msgPositionFromTop > 50) {
      resetPositions();
    }
  }
  if (msgPositionFromTop < 110) {
    header.style.paddingLeft = "90px";
    header.style.transition =
      "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
    if (msgPositionFromTop < 85) {
      header.style.fontSize = "1.8rem";
      msg.style.transition = "none";
    }
    if (msgPositionFromTop < 55) {
      header.classList.add("transparent-glass-bg-top");
    }
    if (msgPositionFromTop <= 0) {
      msg.style.paddingTop = "65px";
      header.style.position = "fixed";
    }
  } else {
    resetPositions();
  }
  setTimeout(() => {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    console.log(msgPositionFromTop);
    if (msgPositionFromTop > 110) {
      resetPositions();
    }
  }, 100);
});

const topSponsorsDivDesktop = document.querySelector(".top-sponsors-desktop");
// const topSponsorsDivMobile = document.querySelector(".top-sponsors-mobile");
const otherSponsorsDivDesktop = document.querySelector(
  ".other-sponsors-desktop"
);
const otherSponsorsDivMobile = document.querySelector(".other-sponsors-mobile");

const topSponsors = sponsorDetails[0];
topSponsors.sponsorsArray.forEach((item) => {
  const newTopSponsorsDiv = document.createElement("div");
  newTopSponsorsDiv.className = "sponsor-card";
  newTopSponsorsDiv.innerHTML = `
          <div class="brand-logo-desktop"><img class="brand-img height-100 width-100" src="${item.imageSrc}" alt=""/></div>
          <div class="brand-name-desktop text-center">${item.name}</div>
          <div class="sponsor-title-desktop text-center">${item.sponsorType}</div>
    `;
  topSponsorsDivDesktop.appendChild(newTopSponsorsDiv);
});

const otherSponsors = sponsorDetails.slice(1);
otherSponsors.forEach((item) => {
  let newSponsorGroupDesktopHTML = `
            <header class="pixelated">${item.groupName}</header>
            <div class="broadband-partner partners-desktop flex flex-wrap justify-center">
            `;
  let newSponsorGroupMobileHTML = `
        <header class="pixelated">${item.groupName}</header>
        <div class="food-partner partners flex flex-wrap justify-center">
    `;
  item.sponsorsArray.forEach((sponsor) => {
    let newSponsorDesktopHTML = `
            <div class="sponsor-card">
              <div class="brand-logo-desktop"><img class="brand-img height-100 width-100" src="${sponsor.imageSrc}" alt=""/></div>
              <div class="brand-name-desktop text-center">${sponsor.name}</div>
              <div class="sponsor-title-desktop text-center">${sponsor.sponsorType}</div>
            </div>
        `;
    let newSponsorMobileHTML = `
        <div class="sponsor-card">
            <div class="brand-logo">
              <img
                class="height-100 width-100"
                src="${sponsor.imageSrc}"
                alt=""
              />
            </div>
            <div class="brand-name text-center">${sponsor.name}</div>
            <div class="sponsor-title text-center">${sponsor.sponsorType}</div>
          </div>`;
    newSponsorGroupDesktopHTML += newSponsorDesktopHTML;
    newSponsorGroupMobileHTML += newSponsorMobileHTML;
  });
  newSponsorGroupDesktopHTML = `
    ${newSponsorGroupDesktopHTML}
    </div>
    `;
  newSponsorGroupMobileHTML = `
    ${newSponsorGroupMobileHTML}
    </div>
    `;
  otherSponsorsDivDesktop.innerHTML += newSponsorGroupDesktopHTML;
  otherSponsorsDivMobile.innerHTML += newSponsorGroupMobileHTML;
});

let video = document.querySelector(".mobile video");
let videoDesktop = document.querySelector(".desktop video");

let mobileWrapper = document.querySelector(".mobile");
let desktopWrapper = document.querySelector(".desktop");

video.currentTime = 0.1
let playBackwardsOnMobile = false;
function playBackward() {
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
  if (video.currentTime == 0) {
    playBackwardsOnMobile = !playBackwardsOnMobile;
  }
  promise = true;
  if (lastScrollPos > mobileWrapper.scrollTop) {
    console.log("scrolling back");
    if (playBackwardsOnMobile) {
      console.log("playing forward");
      playForward();
    } else {
      playBackward();
    }
  } else {
    if (playBackwardsOnMobile) {
      playBackward();
    } else {
      playForward();
    }
  }
  lastScrollPos = mobileWrapper.scrollTop;
});

let promiseDesktop = false;
let lastScrollPosDesktop;
let playBackwards = false;
videoDesktop.currentTime = 0.1;
function playBackwardDesktop() {
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
  setTimeout(() => {
    videoDesktop.currentTime =
      (videoDesktop.currentTime + 0.25).toFixed(2) > videoDesktop.currentTime
        ? (videoDesktop.currentTime + 0.25).toFixed(2)
        : videoDesktop.currentTime;
    console.log(videoDesktop.currentTime);
    promiseDesktop = false;
  }, 75);
}
desktopWrapper.addEventListener("scroll", async () => {
  if (promiseDesktop) return;
  if (videoDesktop.currentTime == 0) {
    playBackwards = !playBackwards;
  }
  promiseDesktop = true;
  if (lastScrollPosDesktop > desktopWrapper.scrollTop) {
    console.log("scrolling back");
    if (playBackwards) {
      console.log("playing forward");
      playForwardDesktop();
    } else {
      playBackwardDesktop();
    }
  } else {
    if (playBackwards) {
      playBackwardDesktop();
    } else {
      playForwardDesktop();
    }
  }
  lastScrollPosDesktop = desktopWrapper.scrollTop;
});

videoDesktop.addEventListener("ended", () => {
  console.log("ended");
  playBackwards = !playBackwards;
});

video.addEventListener("ended", () => {
  console.log("ended");
  playBackwardsOnMobile = !playBackwardsOnMobile;
});