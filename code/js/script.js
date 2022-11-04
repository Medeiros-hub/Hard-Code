let time = 2000,
    currentImgIndex = 0,
    images = document
        .querySelectorAll(".athlete-slider .item"),
    max = images.length

let heroName = document.
        querySelectorAll('main .hero-section .hero-name')

function nextImg() {
    images[currentImgIndex]
        .classList.remove("selected")
    heroName[currentImgIndex]
        .classList.remove("selected")
    currentImgIndex++
    
    if (currentImgIndex >= max) {
        currentImgIndex = 0
    }

    images[currentImgIndex]
        .classList.add("selected")
    heroName[currentImgIndex]
        .classList.add("selected")
}



function startImg() {
    setInterval(() => {
        nextImg()
    }, time)
}

window.addEventListener('load', () => {
    startImg()
})