let button = document.querySelector('button');

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
    let color = prompt('Enter a color');
    document.body.style.backgroundColor = color;
    button.textContent = `Current color: ${color}. Click to change again`;
}