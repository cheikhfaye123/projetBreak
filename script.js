const images = ['./assets/img/background.jpg','./assets/img/background3.jpg','./assets/img/background4.jpg',


'./assets/img/background5.jpg','./assets/img/background7.webp','./assets/img/background8.png',
'./assets/img/background9.jpg','./assets/img/background10.webp','./assets/img/backgroun11.webp',
'./assets/img/background12.jpg','./assets/img/nasa.webp','./assets/img/nasa2.webp',
'./assets/background15.jpg'

];

function setRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;
}

window.onload = setRandomBackgroundImage;
setInterval(setRandomBackgroundImage, 10000);