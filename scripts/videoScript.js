let player = document.querySelector(".videoPlayer");
let list = ["jXApEzjZkl0","MKxNQezJAng", "CAv8uZEMw8Y", "QzdL0QfWIDg", "fmAhFqFKfuk","fT2KhJ8W-Kg", "jjXtaGDjGoQ", "asynnXWJzxo", "zrCIuUkFO3M"];

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
let num = random(0,list.length - 1);

player.setAttribute("src", `https://www.youtube.com/embed/${list[num]}`);