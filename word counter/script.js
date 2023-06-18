let textInput = document.getElementById("textinput");
let btn = document.getElementById("count-button");
let displayCount = document.getElementById("words-count");

function wordCounter() {
    let words = textInput.value;

    let trimWords = words.replace(/\s+/g, " ").trim()

    let splitWords = trimWords.split(" ");

    let totalWords = splitWords.length;

    displayCount.innerHTML = ` ${totalWords}`;
}

btn.addEventListener("click", wordCounter);