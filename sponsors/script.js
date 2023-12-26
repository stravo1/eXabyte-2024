// Code scrolling effects of the page header:
window.addEventListener("scroll", function() {
    let header = document.querySelector("#page-header");
    let topSection = document.querySelector(".top-section");
    let sponsorSection = this.document.querySelector(".sponsor-items");
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    if(currentScrollPos > 10)
    {
        header.style.paddingLeft = "90px";
        header.style.fontSize = "1.8rem";
        header.style.transition = "0.1s padding";
        topSection.style.minHeight = "80px";
        if(currentScrollPos > 50) {
            sponsorSection.style.paddingTop = "100px";
            header.style.position = "fixed";
            topSection.style.height = "80px";
        }
    }
    else {
        header.style.transition = "0.3s padding";
        header.style.fontSize = "2.5rem";
        header.style.position = "sticky";
        header.style.paddingLeft = "40px";
        topSection.style.height = "45%";
        topSection.style.minHeight = "300px";
        sponsorSection.style.paddingTop = "70px";
    }

});