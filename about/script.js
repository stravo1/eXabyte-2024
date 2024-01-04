// Code scrolling effects of the page header:
// -- START
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let sponsorSection = this.document.querySelector(".middle-section");
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
//  -- END

// Code for plus icon on click action:
// -- START
let plus_icon = document.querySelectorAll('.plus-icon');
let plus_icon_wrapper = document.querySelectorAll('.plus-icon-wrapper');
let items_wrapper = document.querySelectorAll('.more-items');

function openItems(n) {
    plus_icon[n].style.transform = "rotate(45deg)";
    plus_icon[n].style.color = "rgba(255, 255, 255, 0.8)";
    plus_icon[n].style.transitionDelay = "0s";
    plus_icon_wrapper[n].style.transitionDelay = "0s";
    plus_icon_wrapper[n].classList.add('open');
    plus_icon_wrapper[n].classList.remove('close');
    plus_icon_wrapper[n].style.background = "var(--primary-color)";
    items_wrapper[n].style.background = "wheat";
    items_wrapper[n].style.borderColor = "goldenrod";
    items_wrapper[n].style.boxShadow = '0 0 10px 2px';
    let val = 0;
    for (let i = 0; i < item.length; i++) {
        val += 35;
        if (i == 0)
            val = 45;
        item[i].style.transitionDelay = '0.21s';
        item[i].style.opacity = 1;
        item[i].style.bottom = val + 'px';
    }
    items_wrapper[n].style.height = val + 45 + 'px';
    items_wrapper[n].style.transitionDelay = "0.12s";
}

function closeItems(n) {
    plus_icon[n].style.transform = "rotate(0deg)";
    plus_icon[n].style.color = "rgba(0, 0, 0, 0.8)";
    plus_icon[n].style.transitionDelay = "0.2s";
    plus_icon_wrapper[n].style.transitionDelay = "0.2s";
    plus_icon_wrapper[n].style.background = "white";
    plus_icon_wrapper[n].classList.add('close');
    plus_icon_wrapper[n].classList.remove('open');
    for (let i = 0; i < item.length; i++) {
        item[i].style.transitionDelay = '0s';
        item[i].style.bottom = "5px";
        item[i].style.opacity = 0;
    }
    items_wrapper[n].style.transitionDelay = "0.05s";
    items_wrapper[n].style.height = '45px';
    items_wrapper[n].style.background = "transparent";
    items_wrapper[n].style.borderColor = "transparent";
    items_wrapper[n].style.boxShadow = '0 0 0';
}

function initItems() {
    for (let i = 0; i < plus_icon.length; i++) {
        item = document.querySelectorAll('.card-' + (i + 1) + ' .more-item-links');
        closeItems(i);
    }
}

function moreItems(card_number) {
    if (plus_icon_wrapper[card_number].className.includes('close')) {
        initItems();
        item = document.querySelectorAll('.card-' + (card_number + 1) + ' .more-item-links');
        openItems(card_number);
    }
    else
        closeItems(card_number);
}

document.addEventListener('click', function (event) {
    if (!event.target.className.includes('plus-icon')) {
        initItems()   ;
    }
});

// -- END