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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Bytetales",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },

  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    modalDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum odit tempore reprehenderit vitae delectus",
    formLink: "https://google.com",
    icon: "data_object",
  },
];

let eventSection = document.querySelector(".events-items");
let eventSectionDesktop = document.querySelector(".event-items-desktop");

eventDetails.forEach((event, index) => {
  let newEventDivDesktop = document.createElement("div");
  newEventDivDesktop.className = "event-card flex relative mt-1rem p-1rem flex flex-col justify-between items-start gap-1rem h-15rem rounded w-85p";
  newEventDivDesktop.innerHTML = `
  <div class="flex justify-between w-full items-center gap-1rem p-025rem">
    <div class="display text-xl z-5">${event.name}</div>
    <span class="material-symbols-outlined text-xl"> menu </span>
  </div>

  </div>
  <div class="z-5">
        ${event.description}
  </div>
  <div class="flex z-5 event-button-group w-full gap-05rem">
    <button class="register-button">View Details</button>
  </div>
      `;
  eventSectionDesktop.appendChild(newEventDivDesktop);
  let newEventDiv = document.createElement("div");
  newEventDiv.className = "event-card flex relative mt-1rem p-1rem flex flex-col justify-between items-start gap-1rem h-15rem rounded w-85p";
  newEventDiv.innerHTML = `
  <div class="flex justify-between w-full items-center gap-1rem p-025rem">
    <div class="display text-xl z-5">${event.name}</div>
    <span class="material-symbols-outlined text-xl"> menu </span>
  </div>
  <div class="z-5 text-md">
      ${event.description}
    </div>
  <div class="flex z-5 event-button-group w-full gap-05rem">
    <button class="register-button">View Details</button>
  </div>
      `;
  eventSection.appendChild(newEventDiv);
})

// function setVideoDims() {
//   let desktopBackground = document.querySelector(".desktop .background")
//   let desktopVideo = document.querySelector(".desktop video")

//   desktopVideo.style.width = desktopBackground.clientHeight + "px"
//   desktopVideo.style.height = desktopBackground.clientWidth + "px"
//   desktopVideo.style.top = (desktopBackground.clientHeight - desktopBackground.clientWidth) / 2 + "px"
//   desktopVideo.style.left = (desktopBackground.clientWidth - desktopBackground.clientHeight) / 2 + "px"
// }
// // setVideoDims()
// window.addEventListener("resize", setVideoDims)