const aside = $("#aside-menu");
const menuBtn = $("#menu-btn");
const close = $(".close-btn");
const body = $("body");
const specialMenu = $("#special-menu");
const normalMenu = $("#normal-menu");

specialMenu.hide();

menuBtn.click(() => {
    aside.show(600);
})

close.click(() => {
    aside.hide(500);
})

let windowWidth = 0;

const checkWidth = () => {
    if(windowWidth<1200){
        specialMenu.show();
        normalMenu.hide();
    }
    else{
        specialMenu.hide();
        normalMenu.show();
    }
}

window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    checkWidth();
});
