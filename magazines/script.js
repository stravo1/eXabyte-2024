document.addEventListener("DOMContentLoaded", function() {
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
    }

    window.addEventListener("scroll", function() {
        let msgPositionFromTop = msg.getBoundingClientRect().top;

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
        } else {
            resetPositions();
        }
    });
});
