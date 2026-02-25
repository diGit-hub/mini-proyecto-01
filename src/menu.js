const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#close");

function toggleMenu(){
    menu.classList.toggle("hidden");
    console.log("Class hidden toggled");
}

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);