const moreInfo = document.querySelector(".more-info");
const wrapper = document.querySelector(".scrollSnap")
moreInfo.addEventListener("click", () => {
    wrapper.scrollTop = wrapper.scrollHeight
})