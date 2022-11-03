const button = document.querySelector(".new-quote-button");
button.addEventListener("click", getQuote);
const quoteApi = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote(){
    console.log("Button click");
    let response = await fetch(quoteApi);
    let json = await response.json();
    //let json = JSON.parse(text);

    console.log(json['message']);
    displayQuote(json['message']);
}

function displayQuote(text){
    document.getElementById("js-quote-text").textContent = text;
}