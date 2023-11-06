const moreInfo = document.querySelector(".more-info");
const wrapper = document.querySelector(".scroll-snap")
moreInfo.addEventListener("click", () => {
    wrapper.scrollTop = wrapper.scrollHeight
})