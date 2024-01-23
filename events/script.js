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
};

window.addEventListener("scroll", function () {
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
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
];

let eventSection = document.querySelector(".events-items");
let eventSectionDesktop = document.querySelector(".event-items-desktop");

eventDetails.forEach((event) => {
  let newEventDivDeskop = document.createElement("div");
  newEventDivDeskop.className = "event-card white-bg rounded";
  newEventDivDeskop.innerHTML = `
              <div class="card-top flex justify-between p-1rem">
                <div class="pixelated text-lg">${event.name}</div>
                <div
                  class="card-symbol flex justify-center items-center circle"
                >
                  <span class="material-symbols-outlined"> ${event.icon} </span>
                </div>
              </div>
              <div class="card-content p-1rem text-sm font-bold">
                ${event.description}
              </div>
              <div class="card-button p-1rem flex justify-between gap-1rem">
                <button class="filled cursor-pointer" disabled onclick="openModal('${event.name}','${event.modalDescription}','${event.formLink}')">Registration Not Yet Open</button>
              </div>
  `;
  eventSectionDesktop.appendChild(newEventDivDeskop);
  eventSection.appendChild(newEventDivDeskop);
});
