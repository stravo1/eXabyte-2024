// Code scrolling effects of the page header:
window.addEventListener("scroll", function () {
    let header = document.querySelector("#page-header");
    let msg = document.querySelector("#page-msg");
    let topSection = document.querySelector(".top-section");
    let sponsorSection = this.document.querySelector(".sponsor-items");
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    if (currentScrollPos > 10) {
        header.style.paddingLeft = "90px";
        header.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
        topSection.style.minHeight = "80px";
        if (currentScrollPos > 50)
            header.style.fontSize = "1.8rem";
        if (currentScrollPos > 100) {
            msg.style.opacity = "0";
            msg.style.left = "60px";
            header.style.position = "fixed";
            sponsorSection.style.paddingTop = "120px";
            topSection.style.height = "80px";
        }
        if (currentScrollPos > 118)
            header.style.boxShadow = "0 25px 30px black";
    }
    else {
        header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear, 0s box-shadow";
        header.style.fontSize = "2.5rem";
        header.style.position = "sticky";
        header.style.paddingLeft = "40px";
        header.style.boxShadow = "0 0 0 black";
        msg.style.opacity = "1";
        topSection.style.height = "45%";
        topSection.style.minHeight = "300px";
        sponsorSection.style.paddingTop = "70px";
    }
});