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

function start() {
    setInterval(() => {
        nextImg()
    }, time)
}


window.addEventListener('load', start)