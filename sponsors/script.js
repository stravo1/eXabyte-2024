// REMEMBER TO REMOVE GREYSCALE ON IMAGES
const sponsorDetails = [
  // {
  //   groupName: "Top Sponsors",
  //   sponsorsArray: [
  //     {
  //       name: "Newton School",
  //       sponsorType: "Broadband Partner",
  //       imageSrc: "/assets/images/sponsor-logos/gtpl-removebg-preview.png",
  //     },

  //   ],
  // },
  {
    groupName: "Broadband Partner",
    sponsorsArray: [
      {
        name: "GTPLKCBPL",
        sponsorType: "",
        imageSrc: "/assets/images/sponsor-logos/gtpl-removebg-preview.png",
      },
    ],
  },
  {
    groupName: "Restaurant Partner",
    sponsorsArray: [
      {
        name: "Gazeeboo",
        sponsorType: "",
        imageSrc: "/assets/images/sponsor-logos/gazeeboo.jpeg",
      },
    ],
  },
  {
    groupName: "Education Partner",
    sponsorsArray: [
      {
        name: "Edureka",
        sponsorType: "",
        imageSrc: "/assets/images/sponsor-logos/Edureka.png",
      },
    ],
  },
  {
    groupName: "Study Abroad Partner",
    sponsorsArray: [
      {
        name: "EduAims",
        sponsorType: "",
        imageSrc: "/assets/images/sponsor-logos/eduaims.jpeg",
      },
    ],
  },
  {
    groupName: "Exclusive Radio Partner",
    sponsorsArray: [
      {
        name: "91.9 Friends FM",
        sponsorType: "",
        imageSrc: "/assets/images/sponsor-logos/91.9-removebg-preview.png",
      },
    ],
  },
  {
    groupName: "Event Partners",
    sponsorsArray: [
      {
        name: "Newton School",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/ns_primary_logo.png",
      },
      {
        name: "Tcg Crest",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/tcg-crest-2000pxl.png",
      },
      {
        name: "Cubelelo",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/cubelelo.png",
      },
      {
        name: "Sum",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/sumeintrruments.jpg",
      },
    ],
  },
  {
    groupName: "Media Partners",
    sponsorsArray: [
      {
        name: "The Edugraph",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/The Telegraph Online Edugraph Logo White Background.png",
      },

    ],
  },
  {
    groupName: "Electronics Partners",
    sponsorsArray: [
      {
        name: "Desai Electronics",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/desai.jpeg",
      },

    ],
  },
  {
    groupName: "Marketing Partners",
    sponsorsArray: [
      {
        name: "Festa",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/Festa.jpg",
      },

    ],
  },
  {
    groupName: "Food Partner",
    sponsorsArray: [
      {
        name: "Moktu",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/moktu.png",
      },
    ],
  },
  {
    groupName: "Pizza Partner",
    sponsorsArray: [
      {
        name: "La Pino'z Pizza",
        sponsorType: "",
        imageSrc:
          "/assets/images/sponsor-logos/pizza.jpeg",
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
