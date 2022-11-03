const funny = document.querySelector("#js-funny-quote");
const friend = document.getElementById('js-friendship-quote');
const wise = document.getElementById('js-wise-quote');

const funnyAPI = 'https://api.quotable.io/quotes?tags=humor';
const friendAPI = 'https://api.quotable.io/quotes?tags=friendship';
const wiseAPI = 'https://api.quotable.io/quotes?tags=wisdom';


funny.addEventListener("click", () => getQuote(funnyAPI));
friend.addEventListener("click", () => getQuote(friendAPI));
wise.addEventListener("click", () => getQuote(wiseAPI));


const quoteApi = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function getQuote(api){
    console.log("Button click");
    let response = await fetch(api);
    let json = await response.json();

    console.log(json);
    let num = getRandomInt(json.results.length);
    console.log(json.results[num].content);
    displayQuote(json.results[num].content, json.results[num].author);
}

function displayQuote(text, author){
    document.getElementById("js-quote-text").textContent = `"${text}" -${author}`;
}