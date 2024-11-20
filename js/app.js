const headerNumber = document.querySelector('.header__number');
let count = 0;

const interval = setInterval(() => {
    if (count < 101) {
        headerNumber.textContent = count;
        count++;
    } else {
        clearInterval(interval)
    }
}, 50);

const lavash = document.querySelector('.btn1');
const gamburger = document.querySelector('.btn2');
const xotDog = document.querySelector('.btn3');
const mainWindow1 = document.querySelector('.main__window1');
const mainWindow2 = document.querySelector('.main__window2');
const mainWindow3 = document.querySelector('.main__window3');
const submit = document.querySelector('.submit')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')

function lavashSubmit() {
    lavash.addEventListener('click', function () {
        mainWindow1.classList.toggle(mainWindow1.style.display = "block")
    })

    img1.addEventListener('dblclick', function () {
        img1.classList.toggle('Img')
        img1.style.cursor = "pointer"
    })

    mainWindow1.addEventListener('click', function () {
        submit.classList.toggle(mainWindow1.style.display = "none")
    })
}

lavashSubmit()

function gamburgerSubmit() {
    gamburger.addEventListener('click', function () {
        mainWindow2.classList.toggle(mainWindow2.style.display = "block")
    })

    img2.addEventListener('dblclick', function () {
        img2.classList.toggle('Img')
        img2.style.cursor = "pointer"
    })

    mainWindow2.addEventListener('click', function () {
        submit.classList.toggle(mainWindow2.style.display = "none")
    })
}

gamburgerSubmit()

function xotdogSubmit() {
    xotDog.addEventListener('click', function () {
        mainWindow3.classList.toggle(mainWindow3.style.display = "block")
    })

    img3.addEventListener('dblclick', function () {
        img3.classList.toggle('Img')
        img3.style.cursor = "pointer"
    })

    mainWindow3.addEventListener('click', function () {
        submit.classList.toggle(mainWindow3.style.display = "none")
    })
}

xotdogSubmit()

const footerBtn = document.querySelector('.footer__button')
const footerWindow = document.querySelector('.footer__window')
const footerText = document.querySelector('.footer__text')

function footerCheck() {
    footerBtn.addEventListener('click', function () {
        footerWindow.classList.toggle('footerWindow')
        footerText.classList.toggle('footerText')
    })
}

footerCheck()