const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const sources = ["images/pic1.gif", "images/WarmWoods.JPG", "images/PizzaOven.png","images/Pond1.jpeg","images/Murphy2.png"];
/* Declaring the alternative text for each image file */
const altText = ["A cat swimming with fish", "Man sitting in a mountain forest", "A tasty pizza in a pizza oven", "A pond with a stone bridge", "A cat being a bit silly"]
/* Looping through images */



for(let i = 0; i < altText.length; i++){
    const newImage = document.createElement('img');  
    newImage.setAttribute("src", sources[i]);
    newImage.setAttribute("alt", altText[i]);
    newImage.addEventListener("click", () => displayedImage.setAttribute("src", sources[i]));
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
function darken(){
    if (btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }

}
btn.addEventListener("click", darken)