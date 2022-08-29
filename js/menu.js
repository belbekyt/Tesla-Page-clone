let scrollTopValue = 0;
let flag = false;

const menu = document.querySelector("nav");
const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const logo = document.querySelector(".logo");

let addMenu = () => {
    menu.classList.add("nav-active");
    icon1.classList.add("image-convert-on");
    icon2.classList.add("image-convert-on");
    logo.classList.add("image-convert-on");
}

let removeMenu = () => {
    menu.classList.remove("nav-active");
    icon1.classList.remove("image-convert-on");
    icon2.classList.remove("image-convert-on");
    logo.classList.remove("image-convert-on");
}

let check = () => {
    if(scrollTopValue>75){
        addMenu();
    }
    else{
        removeMenu();
    }
}

window.addEventListener("scroll", (e) => {
    scrollTopValue = window.scrollY; 
    check();
});

menu.addEventListener("mouseover", () => {
    addMenu();
})

menu.addEventListener("mouseout", () => {
    !flag ? removeMenu() : "";
})

// menu showing on white and disappear ^^^
// second part menu -- clicking on menu buttons cause showing/hiding bigger menu

const firstHidden = $("#first-hidden");
const secondHidden = $("#second-hidden");
const thirdHidden = $("#third-hidden");
const fourthHidden = $("#fourth-hidden");
const hiddenMenus = [firstHidden, secondHidden, thirdHidden, fourthHidden]

const hideAll = function(){
    firstHidden.hide();
    secondHidden.hide();
    thirdHidden.hide();
    fourthHidden.hide();
}

hideAll();

menu.addEventListener("click", (e) => {
    switch(e.target.id){
        case "first-button":
            flag = true;
            hideAll();
            firstHidden.show();
            break;
        case "second-button":
            flag = true;
            hideAll();
            secondHidden.show();
            break;
        case "third-button":
            flag = true;
            hideAll();
            thirdHidden.show();
            break;    
        case "fourth-button":
            flag = true;
            hideAll();
            fourthHidden.show();
            break;
}})

hiddenMenus.forEach((item) => {
    item.mouseleave(() => {
        hideAll();
        flag = false;
        removeMenu();
    })
})