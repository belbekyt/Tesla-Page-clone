let scrollTopValue = 0;

let menu = document.querySelector("nav");
let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");
let logo = document.querySelector(".logo");

icon1.classList.add("image-convert-off");
icon2.classList.add("image-convert-off");
logo.classList.add("image-convert-off");

let check = () => {
    if(scrollTopValue>75){
        menu.classList.add("nav-active");
        icon1.classList.add("image-convert-on");
        icon2.classList.add("image-convert-on");
        logo.classList.add("image-convert-on");
        icon1.classList.remove("image-convert-off");
        icon2.classList.remove("image-convert-off");
        logo.classList.remove("image-convert-off");
    }
    else{
        menu.classList.remove("nav-active");
        icon1.classList.remove("image-convert-on");
        icon2.classList.remove("image-convert-on");
        logo.classList.remove("image-convert-on");
        icon1.classList.add("image-convert-off");
        icon2.classList.add("image-convert-off");
        logo.classList.add("image-convert-off");
    }
}

window.addEventListener("scroll", (e) => {
    scrollTopValue = window.scrollY; 
    check();
});