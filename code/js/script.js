let time = 2000,
    currentImgIndex = 0,
    images = document
        .querySelectorAll(".athlete-slider .item"),
    max = images.length


function nextImg() {
    images[currentImgIndex]
        .classList.remove("selected")

    currentImgIndex++
    
    if (currentImgIndex >= max) {
        currentImgIndex = 0
    }

    images[currentImgIndex]
        .classList.add("selected")
}


let heroName = document.
        querySelectorAll('main .hero-section .hero-name')


function nextHeroName() {
    /*heroName[currentImgIndex].style.top = 'auto'

    heroName[currentImgIndex].style.top = 0*/
}

function startImg() {
    setInterval(() => {
        nextImg()
        nextHeroName()
    }, time)
}

window.addEventListener('load', () => {
    startImg()
})