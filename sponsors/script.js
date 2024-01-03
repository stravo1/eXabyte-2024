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
}

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
        header.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
        if (msgPositionFromTop < 85) {
            header.style.fontSize = "1.8rem";
            msg.style.transition = "none";
        }
        if (msgPositionFromTop <= 0) {
            msg.style.paddingTop = "65px";
            header.style.position = "fixed";
        }
    }
    else {
        resetPositions();
    }
    setTimeout(() => {
        let msgPositionFromTop = msg.getBoundingClientRect().top;
        console.log(msgPositionFromTop);
        if (msgPositionFromTop > 110) {
            resetPositions()
        }
    }, 100)
});
