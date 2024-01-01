let c = 0;

function moreItems() {
    let items_group = document.querySelector('.more-items');
    let plus_icon = document.querySelector('.more-items-icon');
    let embedded = document.querySelector('.embedded-icon');
    let items = document.getElementsByClassName('more-item-links');
    if (c % 2 == 0) {
        plus_icon.style.transform = "rotate(45deg)";
        plus_icon.style.color = "rgba(255, 255, 255, 0.8)";
        embedded.style.background = "var(--primary-color)";
        items_group.style.background = "wheat";
        items_group.style.borderColor = "goldenrod";
        items_group.style.boxShadow = '0 0 10px 2px';
        let val = 0;
        for (i = 0; i < items.length; i++) {
            val += 35;
            if(i == 0)
            val = 45;
            items[i].style.opacity = 1;
            items[i].style.bottom = val + 'px';
        }
        items_group.style.height = val + 45 + 'px';
    }
    else {
        plus_icon.style.transform = "rotate(0deg)";
        plus_icon.style.color = "rgba(0, 0, 0, 0.8)";
        embedded.style.background = "white";
        for (i = 0; i < items.length; i++) {
            items[i].style.bottom = "5px";
            items[i].style.opacity = 0;
        }
        items_group.style.height = '45px';
        items_group.style.background = "transparent";
        items_group.style.borderColor = "transparent";
        items_group.style.boxShadow = '0 0 0';
    }
    c++;
}