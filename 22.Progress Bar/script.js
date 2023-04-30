const progressbar = document.querySelector("#progressbar");

function updateProgressbar() {
    let scrollPosition = window.scrollY;
    let documentHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    let progress = ( scrollPosition / (documentHeight - windowHeight)) * 100;
    progressbar.value = progress;
}

window.addEventListener("scroll", updateProgressbar)