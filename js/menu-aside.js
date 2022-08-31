const aside = $("#aside-menu");
const menuBtn = $("#menu-btn");
const close = $(".close-btn");
const body = $("body");

menuBtn.click(() => {
    aside.show(600);
    // body.addClass("item-blur");
    aside.addClass("item-not-blur");
})

close.click(() => {
    aside.hide(500);
})