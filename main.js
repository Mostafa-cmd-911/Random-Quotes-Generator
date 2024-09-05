let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".quote-display");
let quoteId = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".auto-status");
let intervalId;

generateBtn.onclick = generateQuote;
autoBtn.onclick = start;
stopBtn.onclick = end;

async function getQuotes() {
    const response = await fetch("quotes.json");
    const data = await response.json();
    return data;
}

async function generateQuote() {
    const quotes = await getQuotes();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDiv.innerHTML = quote.text;
    quoteId.innerHTML = quote.id;
}

function start() {
    intervalId = setInterval(generateQuote, 1000);
    autoStatus.innerHTML = "Auto: ON";
}

function end() {
    clearInterval(intervalId);
    autoStatus.innerHTML = "";
}
