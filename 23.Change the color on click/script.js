/* ARRAY OF COLORS */
const arr = ["red", "blue", "yellow", "purple", "black", "orange", "gray"];

/* MAIN FUNCTION */
function changeColor() {
    let randomNum = Math.round(Math.random() * arr.length);
    let color = arr[randomNum];
    return document.body.style.backgroundColor = color;
}