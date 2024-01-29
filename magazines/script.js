document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("#page-header");
  let msg = document.querySelector("#page-msg");
  let topSection = document.querySelector(".top-section");
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
});

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