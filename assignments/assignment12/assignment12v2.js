let num = [0,0,0,0,0,0,0,0,0,0];
let index = 9;

const output = document.querySelector('.output');
const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');
const resetButton = document.querySelector('.resetButton').addEventListener('click', reset);
const submitButton = document.querySelector('.submitButton').addEventListener('click', submit);
const buttons = [button0,button1,button2,button3,button4,button5,button6,button7,button8,button9];

output.textContent = `(${num[9]}${num[8]}${num[7]})-${num[6]}${num[5]}${num[4]}-${num[3]}${num[2]}${num[1]}${num[0]}`;

for (let button of buttons){
    button.style.position = 'absolute';
    button.addEventListener("click", () => numPress(button.getAttribute("value")));
}

function getRandomInt(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function numPress(int){
    num[index] = int;
    output.textContent = `(${num[9]}${num[8]}${num[7]})-${num[6]}${num[5]}${num[4]}-${num[3]}${num[2]}${num[1]}${num[0]}`;
    randomize();
    index--;
}

function reset(){
    num = [0,0,0,0,0,0,0,0,0,0];
    output.textContent = `(${num[9]}${num[8]}${num[7]})-${num[6]}${num[5]}${num[4]}-${num[3]}${num[2]}${num[1]}${num[0]}`;
    index = 9;
}

function submit(){
   alert(output.textContent);
}

function randomize(){
    for(let button of buttons){
        button.style.top = `${getRandomInt(100,4000)}px`;
        button.style.left = `${getRandomInt(0,8000)}px`;
    }
}

randomize();