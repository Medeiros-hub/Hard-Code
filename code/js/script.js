let time = 2000,
    currentImgIndex = 0,
    heroImages = document
        .querySelectorAll(".athlete-slider .item"),
    max = heroImages.length,
    heroName = document
        .querySelectorAll('main .hero-section .hero-name'),
    heroDescription = document
        .querySelectorAll('.hero-section .hero-description p'),
    heroBars = document
        .querySelector('.bars-group .main-bar')

        

function removeSelected(propertie) {
    propertie[currentImgIndex]
        .classList.remove("selected")
}

function addSelected(propertie) {
    propertie[currentImgIndex]
        .classList.add("selected")
}

function nextImg() {

    removeSelected(heroImages)
    removeSelected(heroName)
    removeSelected(heroDescription)
    currentImgIndex++
    
    if (currentImgIndex >= max) {
        currentImgIndex = 0
    }

    if (currentImgIndex == 0) {
        heroBars.style.left = '0'
    } else if (currentImgIndex == 1) {
        heroBars.style.left = '33.3%'
    } else {
        heroBars.style.left = '67%'
    }

    addSelected(heroImages)
    addSelected(heroName)
    addSelected(heroDescription)
    /*addSelected(heroBars)*/
}



function startImg() {
    setTimeout(() => {
        for (let i = 0; i < max; i++) {
            heroImages[i]
                .classList.remove("selected")
            heroName[i]
                .classList.remove("selected")
            heroDescription[i]
                .classList.remove("selected")
        }
    }, 1000)
    setInterval(() => {
        nextImg()
    }, time)
}

window.addEventListener('load', () => {
    startImg()
})