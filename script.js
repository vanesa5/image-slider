// Left arrow
const left = document.querySelector(".left");
// Right Arrow
const right = document.querySelector(".right");
// Image Slider
const slider = document.querySelector(".slider");
// Images 
const images = document.querySelectorAll(".image")
// Bottom div
const bottom = document.querySelector(".bottom");

const length = images.length;

let slideNum = 1;

    // for red buttons in div buttom
    for (let i = 0; i < length; i++){
        const div = document.createElement("div")
        div.className = "button";
        bottom.appendChild(div)

    }

// declare a quaryselector after so that it works

const buttons = document.querySelectorAll(".button");
    buttons[0].style.backgroundColor ="orange";

// remove backgorund color is not seletced
const resetBg = () =>{
    buttons.forEach((button)=>{
        button.style.backgroundColor= "white"
    })
}

// for each button Event Listeners
buttons.forEach((button, i)=>{
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 800}px)`
        slideNum = i + 1;
        button.style.backgroundColor ="orange";

    })
})


// Next Slide ()
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNum * 800}px)`;
    slideNum++;
}
// Prev Slide ()
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNum -2)* 800}px)`;
    slideNum--;
}
// First Slide 
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
        slideNum;
}
// Last Slide 
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNum = length;
}

const changeColor = () =>{
    resetBg();
    buttons[slideNum-1].style.backgroundColor = "orange";
}

// Event Listeners

    // Right Arrow
    right.addEventListener("click", ()=>{
        //Simplified if statement 
        slideNum < length ? nextSlide() : getFirstSlide();
        changeColor();
    
        // if (slideNum < images.length){
        //     nextSlide()
        // } else {
        //     prevSlide()
        // }
    })

    // Left Arrow

    left.addEventListener("click", () => {
        slideNum > 1 ? prevSlide() : getLastSlide()
        changeColor();
    })



