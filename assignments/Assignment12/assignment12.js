let num = 0000000000;

const minusButton = document.querySelector('.minusButton').addEventListener('click', minus);
const plusButton = document.querySelector('.plusButton').addEventListener('click',plus);
const resetButton = document.querySelector('.resetButton').addEventListener('click', reset);
const submitButton = document.querySelector('.submitButton').addEventListener('click', submit);
const randomButton = document.querySelector('.randomButton').addEventListener('click', random);

const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

output.textContent = num;

//button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
}

function minus(){
    if (num > 0){
        num--;
        output.textContent = num;
    }
}

function plus(){
    if (num < 9999999999){
        num++;
        output.textContent = num;
    }
}

function random(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    num = getRandomInt(9999999999);
    output.textContent = num;
}

function reset(){
    num = 0000000000;
    output.textContent = num;
}

function submit(){
    alert(output.textContent);
}

let slider = document.querySelector(".slider");
let sliderSubmit = document.querySelector(".sliderButton").addEventListener('click', update);
let sliderOut = document.querySelector(".sliderOut");

function update(){
    sliderOut.textContent = slider.value;
}