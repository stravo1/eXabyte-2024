// let popUp = document.querySelector(".about-pop-up");
// let infoButton = document.querySelector(".info-button");
// let aboutSection = document.querySelector(".about-fest");

// function openPopUp() {
//     popUp.classList.add('visible');
//     aboutSection.classList.add("dark-glass");
// }

// function closePopUp() {
//     popUp.classList.remove('visible');
//     aboutSection.classList.remove("dark-glass");
// }

// function infoButtonAction() {
//     if(!popUp.className.includes('visible'))
//     openPopUp();
//     else
//     closePopUp();
// }

// document.addEventListener('click', function (event) {
//     if(!event.target.className.includes('info-button') && !event.target.className.includes('about-pop-up') && !event.target.className.includes('about-details-wrapper') && !event.target.className.includes('close-pop-up') )
//     closePopUp();
// });
const futureDate = new Date("2024-02-12 10:00").getTime();

// Update the countdown every second
const interval = setInterval(function () {
    const now = new Date().getTime();
    const distance = futureDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers with leading zeros
    const formattedDays = ('0' + days).slice(-2);
    const formattedHours = ('0' + hours).slice(-2);
    const formattedMinutes = ('0' + minutes).slice(-2);
    const formattedSeconds = ('0' + seconds).slice(-2);

    // Display the countdown
    document.getElementById("timer").innerHTML = `${formattedDays} : ${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;

    // If the countdown is over, stop the interval
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

openModal("IMPORTANT", `
Hello everyone, hope you are ready for the Annual Departmental Tech Fest, eXabyte'24 - Beyond Binary.
<br>
<br>
Due to the unfortunate demise of Rev. Fr. P.C. Mathew SJ, the former principal of St. Xavier's College (Autonomous), Kolkata, we have to postpone the second day of eXabyte'24. 
However we are trying to accommodate it within this week, probably on 15th. 
Please patiently wait till further notice. 
<br>
Day 1 is still on! So gear up to be a part of an amazing experience!!!
<br>
<br>
Everyone is welcome to attend the Opening ceremony of eXabyte'24 on 12th Feb and take part in the various events. Thank you for your participation and support. 
<br>
<br>
<b>See you at runtime!</b>
`)