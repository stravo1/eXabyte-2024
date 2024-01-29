// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let sponsorSection = this.document.querySelector(".events-items");
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
  // console.log(msgPositionFromTop);
  if (msg.style.paddingTop == "65px") {
    if (msgPositionFromTop > 50) {
      resetPositions();
    }
  }
  if (msgPositionFromTop < 110) {
    header.style.paddingLeft = "90px";
    header.style.transition =
      "0.1s font-size, 0.025s padding, top 0.3s linear, 0.3s box-shadow";
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

const eventDetails = [
  {
    name: "Codeplay",
    description:
      "Where tech enthusiasts unite, showcasing innovation through collaborative coding, workshops, and networking.",
    modalDescription:
      "Where tech enthusiasts unite, showcasing innovation through collaborative coding, workshops, and networking.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Webbed",
    description:
      "Unleash creativity &  Elevate your coding skills at this immersive web development event.",
    modalDescription:
      "Unleash creativity &  Elevate your coding skills at this immersive web development event.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Crypt-X",
    description:
      "Dive into the cryptic challenge, solve puzzles & crack encrypted messages.",
    modalDescription:
      "Dive into the cryptic challenge, solve puzzles & crack encrypted messages.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Brainstorm",
    description:
      "Ignite your intellect in a thrilling quiz challenge, testing knowledge and quick thinking.",
    modalDescription:
      "Ignite your intellect in a thrilling quiz challenge, testing knowledge and quick thinking.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Verb-O-War",
    description:
      "Engage in thought-provoking debates, where ideas clash and minds spark intellectual fireworks.",
    modalDescription:
      "Engage in thought-provoking debates, where ideas clash and minds spark intellectual fireworks.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Digitbit",
    description:
      "Unleash creativity in hardware design challenges, where circuits come to life with innovation.",
    modalDescription:
      "Unleash creativity in hardware design challenges, where circuits come to life with innovation.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Em-Bleed",
    description:
      "Transform imagination into pixels at this digital art and design event, sparking creative brilliance.",
    modalDescription:
      "Transform imagination into pixels at this digital art and design event, sparking creative brilliance.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Byte Tales",
    description:
      "Sculpt powerful narratives in tiny spaces, where words spark worlds in microfiction mastery",
    modalDescription:
      "Sculpt powerful narratives in tiny spaces, where words spark worlds in microfiction mastery",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "X-Hunt",
    description:
      "Embark on a thrilling clue hunt, decode mysteries, and unravel the enigma.",
    modalDescription:
      "Embark on a thrilling clue hunt, decode mysteries, and unravel the enigma.",
    formLink: "https://google.com",
    icon: "data_object",
  },

  {
    name: "Cube-X",
    description:
      "Twist, turn, and conquer the challenge in this Rubik's Cube-solving showdown.",
    modalDescription:
      "Twist, turn, and conquer the challenge in this Rubik's Cube-solving showdown.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Snappit",
    description:
      "Capture the essence of moments, express creativity through lenses in this captivating photography event.",
    modalDescription:
      "Capture the essence of moments, express creativity through lenses in this captivating photography event.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Sudo-X",
    description:
      "Tackle number puzzles, sharpen your mind, and conquer Sudoku mastery in this event.",
    modalDescription:
      "Tackle number puzzles, sharpen your mind, and conquer Sudoku mastery in this event.",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Excelerate",
    description:
      "Dive into the adrenaline-fueled world of esports, where skills clash and champions emerge.",
    modalDescription:
      "Dive into the adrenaline-fueled world of esports, where skills clash and champions emerge.",
    formLink: "https://google.com",
    icon: "data_object",
  },
];

let eventSection = document.querySelector(".events-items");
let eventSectionDesktop = document.querySelector(".event-items-desktop");

eventDetails.forEach((event, index) => {
  let newEventDivDesktop = document.createElement("div");
  newEventDivDesktop.className = "nft relative z-3";
  newEventDivDesktop.innerHTML = `
    <div class="main">
          <img
          class="tokenImage black-bg"
          src="/assets/images/events/bytetales1.jpg"
          />
      <div class="flex flex-col">
        <span class="text-lg font-bold p-1rem" style="padding-left: 0px"
        >${event.name} #${index + 1}</span
        >
      </div>
      <p class="description">
        ${event.description}
      </p>
      <hr />
      <div class="cta flex justify-center">
        <span class="text-ms" style="padding: 0.5rem 0; opacity: 50%">Registrations Opening Soon</span>
      </div>
    </div>
      `;
  eventSectionDesktop.appendChild(newEventDivDesktop);
  let newEventDiv = document.createElement("div");
  newEventDiv.className = "nft relative z-3";
  newEventDiv.innerHTML = `
    <div class="main">
          <img
          class="tokenImage black-bg"
          src="/assets/images/events/bytetales1.jpg"
          />
      <div class="flex flex-col">
        <span class="text-lg font-bold p-1rem" style="padding-left: 0px"
        >${event.name} #${index + 1}</span
        >
      </div>
      <p class="description">
        ${event.description}
      </p>
      <hr />
      <div class="cta flex justify-center">
        <span class="text-lg" style="padding: 0.5rem 0; opacity: 50%">Registration Not Yet Open</span>
      </div>
    </div>
      `;
  eventSection.appendChild(newEventDiv);
})

function setVideoDims() {
  let desktopBackground = document.querySelector(".desktop .background")
  let desktopVideo = document.querySelector(".desktop video")

  desktopVideo.style.width = desktopBackground.clientHeight + "px"
  desktopVideo.style.height = desktopBackground.clientWidth + "px"
  desktopVideo.style.top = (desktopBackground.clientHeight - desktopBackground.clientWidth) / 2 + "px"
  desktopVideo.style.left = (desktopBackground.clientWidth - desktopBackground.clientHeight) / 2 + "px"
}
setVideoDims()
window.addEventListener("resize", setVideoDims)