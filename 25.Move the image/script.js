const image = document.querySelector("#image");
const speed = 30;

function moveImage(event) {
    if(event.keyCode === 37 || event.key === "ArrowLeft") {
        image.style.left = parseInt(image.style.left) - speed + "px";
    } else if (event.keyCode === 38 || event.key === "ArrowUp") {
        image.style.top = parseInt(image.style.top) - speed + "px";
    } else if (event.keyCode === 39 || event.key === "ArrowRight") {
        image.style.left = parseInt(image.style.left) + speed + "px";
    } else if (event.keyCode === 40 || event.key === "ArrowDown") {
        image.style.top = parseInt(image.style.top) + speed + "px";
    }
}

document.addEventListener("keydown", moveImage);