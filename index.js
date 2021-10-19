const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage = "dice" + randomNumber1 + ".png";
const randomImageSource = "/DICES/img/" + randomDiceImage;

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage2 = "dice" + randomNumber2 + ".png";
const randomImageSource2 = "/DICES/img/" + randomDiceImage2;

const image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Play 1 Wins!";
}

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩Play 2 Wins!";
}

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Players Draw!";
}