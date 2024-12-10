let burger = document.querySelector(".logo-login")
let btn = document.querySelector(".hamburger")


let count = 0
let gooset = 150

btn.addEventListener("click", () =>{
    if (count === 0 ){

        count = 1
        
        let intervalF = setInterval(() =>{
            burger.style.transform = "translateX(-"+gooset+"%)"
            gooset--
            if(gooset===0)
            {
                clearInterval(intervalF)
            }
        }) 
    }

    else{
        count = 0

        let intervalF = setInterval(() =>{
            burger.style.transform = "translateX(-"+gooset+"%)"
            gooset++
            if(gooset===151)
            {
                clearInterval(intervalF)
            }
        }) 
        
    }
})





const slider = document.querySelector(".container-slider-loved")
const prevButton = document.querySelector(".prev-button")
const nextButton = document.querySelector(".next-button")
const slides = Array.from(slider.querySelectorAll(".loved-slider"))
const slideCount = slides.length
let slideIndex = 0

prevButton.addEventListener("click", showPreviousSlide)
nextButton.addEventListener("click", showNextSlide)

function showPreviousSlide(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider()
}

function showNextSlide(){
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider()
}

function updateSlider(){
    slides.forEach((slide,index) =>{
        if (index=== slideIndex){
            slide.style.display = 'block'
        } else{
             slide.style.display = 'none'
        }
    })
}


updateSlider()
