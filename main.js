// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const randomNumber = Math.floor(Math.random() * 9) + 1;

const img = document.createElement('img');

const imagePath = `./img/${randomNumber}.jpg`
console.log(imagePath, "imagePath");

img.src = imagePath;

document.body.appendChild(img);
















