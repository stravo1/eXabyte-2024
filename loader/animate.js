const el = document.querySelector(".dynamic")
const st = document.querySelector(".static")
const loader = document.querySelector(".loader")

let finishedLoading = false;

const reset = () => {
    el.scrollTop = 0;
    setTimeout(scrollToNextByte, 750)
}
const scrollToNextByte = () => {
    el.scrollTop = el.scrollTop + 35;
    console.log(el.scrollTop, el.scrollHeight);
    if (el.scrollTop > 170) {
        if (!finishedLoading) {
            setTimeout(reset, 1250)
        } else {
            loader.classList.add("hidden")
        }
    } else {
        setTimeout(scrollToNextByte, 750)
    }
}

if (localStorage.getItem("fontsCached")) {
    el.classList.remove("hidden-no-anim")
    st.classList.remove("hidden-no-anim")
    reset()
}

window.addEventListener("load", () => {
    if (!localStorage.getItem("fontsCached")) {
        localStorage.setItem("fontsCached", true);
        el.classList.add("visible")
        st.classList.add("visible")
        setTimeout(reset, 1000)
    }
    finishedLoading = true
})
