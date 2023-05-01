const para = document.querySelector(".para-graph");
const words = para.innerHTML.split(" ");

 
let highlightedWords = words.map(function(word) {
        if (word.length > 8) {
            return `<span style="background-color: yellow"> ${word} </span>`;
        } else {
            return word;
        }
});

para.innerHTML = highlightedWords.join(" ");
