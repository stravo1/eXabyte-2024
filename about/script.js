let c = 0;
let plus_icon = document.querySelector('#plus-icon');
let plus_icon_wrapper = document.querySelector('.plus-icon-wrapper');
let item = document.querySelectorAll('.more-item-links');
let items_wrapper = document.querySelector('.more-items');

function openItems() {
    plus_icon.style.transform = "rotate(45deg)";
    plus_icon.style.color = "rgba(255, 255, 255, 0.8)";
    plus_icon_wrapper.style.background = "var(--primary-color)";
    items_wrapper.style.background = "wheat";
    items_wrapper.style.borderColor = "goldenrod";
    items_wrapper.style.boxShadow = '0 0 10px 2px';
    let val = 0;
    for (i = 0; i < item.length; i++) {
        val += 35;
        if (i == 0)
            val = 45;
        item[i].style.opacity = 1;
        item[i].style.bottom = val + 'px';
    }
    items_wrapper.style.height = val + 45 + 'px';
}

function closeItems() {
    plus_icon.style.transform = "rotate(0deg)";
    plus_icon.style.color = "rgba(0, 0, 0, 0.8)";
    plus_icon_wrapper.style.background = "white";
    for (i = 0; i < item.length; i++) {
        item[i].style.bottom = "5px";
        item[i].style.opacity = 0;
    }
    items_wrapper.style.height = '45px';
    items_wrapper.style.background = "transparent";
    items_wrapper.style.borderColor = "transparent";
    items_wrapper.style.boxShadow = '0 0 0';
}

function moreItems() {
    if (c % 2 == 0)
        openItems();
    else
        closeItems();
    c++;
}

document.addEventListener('click', function(event) {
    if(event.target.id != 'plus-icon') {
        closeItems();
        c++;
    }
})