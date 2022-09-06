const aside = $("#aside-menu");
const menuBtn = $("#menu-btn");
const close1 = $("#close1");

const close2 = $("#close2");
const close3 = $("#close3");
const close4 = $("#close4");
const close5 = $("#close5");
const closeBtns = [close2, close3, close4, close5];

const specialMenu = $("#special-menu");
const normalMenu = $("#normal-menu");

const charging = $("#charging");
const vehicle = $("#vehicle");
const apparel = $("#apparel");
const lifestyle = $("#lifestyle");
const asides = [charging, vehicle, apparel, lifestyle];

const firstAside = $("#first-aside");
const secondAside = $("#second-aside");
const thirdAside = $("#third-aside");
const fourthAside = $("#fourth-aside");

const back1 = $("#back1");
const back2 = $("#back2");
const back3 = $("#back3");
const back4 = $("#back4");
const backBtns = [back1, back2, back3, back4];

specialMenu.hide();

menuBtn.click(() => {
    aside.show(600);
});

close1.click(() => {
    aside.hide(500);
});

const closeAll = () => {
    firstAside.hide(500);
    secondAside.hide(500);
    thirdAside.hide(500);
    fourthAside.hide(500);
}

closeAll();

closeBtns.forEach((item) => {
    item.click(() => {
        aside.hide(500);
        closeAll();
    })
});

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

backBtns.forEach((item) => {
    item.click(() => {
        closeAll();
    })
});

charging.click(() => {
    firstAside.show(500);
});

vehicle.click(() => {
    secondAside.show(500);
});

apparel.click(() => {
    thirdAside.show(500);
});

lifestyle.click(() => {
    fourthAside.show(500);
});

//tied to put clicks into switch but this causes some errors - probably the owl carousel library is bugged :(