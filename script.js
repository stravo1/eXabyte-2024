let popUp = document.querySelector(".about-pop-up");
let infoButton = document.querySelector(".info-button");
let aboutSection = document.querySelector(".about-fest");

function openPopUp() {
    popUp.classList.add('visible');
    aboutSection.classList.add("dark-glass");
}

function closePopUp() {
    popUp.classList.remove('visible');
    aboutSection.classList.remove("dark-glass");
}

function infoButtonAction() {
    if(!popUp.className.includes('visible'))
    openPopUp();
    else
    closePopUp();
}

document.addEventListener('click', function (event) {
    if(!event.target.className.includes('info-button') && !event.target.className.includes('about-pop-up') && !event.target.className.includes('about-details-wrapper') && !event.target.className.includes('close-pop-up') )
    closePopUp();
});