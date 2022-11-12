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



// Slider gráficos
let carouselChart = {
    previousChart: document.getElementById("previous-chart"),
    nextChart: document.getElementById("next-chart"),
    carouselContainer: document.querySelector(".grid-details .grid-container"),
    carouselContent: document.querySelectorAll(".grid-details .grid-container .grid-carousel"),
    barProgress: document.querySelector(".container-details .progressBar-invest .main-bar"),
    position: 0,
    index: 0
}

carouselChart.barProgress.style.left = '0'
function movePreviousChart() {
    if (carouselChart.carouselContainer.style.transform == 'translateX(0%)') {
        return
    }

    carouselChart.carouselContainer.style.transform = `translateX(${carouselChart.position + 33}%)`
    carouselChart.position += 33

    carouselChart.index--

    if (carouselChart.index == 0) {
        carouselChart.barProgress.style.left = '0'
        carouselChart.previousChart.style.opacity = '0.5'
    } else if (carouselChart.index == 1) {
        carouselChart.barProgress.style.left = '33.3%'
        carouselChart.nextChart.style.opacity = '1'
    } else {
        carouselChart.barProgress.style.left = '67%'
        carouselChart.previousChart.style.opacity = '0.5'
    }

}

function moveNextChart() {
    if (carouselChart.carouselContainer.style.transform == 'translateX(-66%)') {
        return
    }
    
    carouselChart.carouselContainer.style.transform = `translateX(${carouselChart.position - 33}%)`
    carouselChart.position -= 33

    carouselChart.index++

    if (carouselChart.index == 0) {
        carouselChart.barProgress.style.left = '0'
        carouselChart.nextChart.style.opacity = '0.5'
    } else if (carouselChart.index == 1) {
        carouselChart.barProgress.style.left = '33.3%'
        carouselChart.previousChart.style.opacity = '1'
    } else {
        carouselChart.barProgress.style.left = '67%'
        carouselChart.nextChart.style.opacity = '0.5'
    }


}

carouselChart.nextChart.addEventListener('click', moveNextChart)
carouselChart.previousChart.addEventListener('click', movePreviousChart)





// slider img default

let slider_imgDefault = {
    imgDiv: document.querySelector(".slider-images .group-1 > div")
}