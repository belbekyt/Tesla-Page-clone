let scrollTopValue = 0;

const menu = document.querySelector("nav");
const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const logo = document.querySelector(".logo");

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

menu.addEventListener("mouseover", () => {
    menu.classList.add("nav-active");
    icon1.classList.add("image-convert-on");
    icon2.classList.add("image-convert-on");
    logo.classList.add("image-convert-on");
})

menu.addEventListener("mouseout", () => {
    menu.classList.remove("nav-active");
    icon1.classList.remove("image-convert-on");
    icon2.classList.remove("image-convert-on");
    logo.classList.remove("image-convert-on");
})

// menu showing on white and disappear ^^^
// showing additional box with buttons ,,,

menu.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("li-script")){
        e.target.classList.add("li-active");
    }
})

menu.addEventListener("mouseout", (e) => {
    if(e.target.classList.contains("li-script")){
        e.target.classList.remove("li-active");
    }
})