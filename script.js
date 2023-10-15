const sky = document.getElementById("sky");
const numStarBig = 50;
const numStarMed = 100;
const numStarSmall = 200;

function generate() {
    for (let i = 0; i < numStarBig; i++) {
        const star = document.createElement("div");
        star.className = "star-big";
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 100}s`;
        sky.appendChild(star);
    }

    for (let i = 0; i < numStarMed; i++) {
        const star = document.createElement("div");
        star.className = "star-med";
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 100}s`;
        sky.appendChild(star);
    }

    for (let i = 0; i < numStarSmall; i++) {
        const star = document.createElement("div");
        star.className = "star-small";
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 100}s`;
        sky.appendChild(star);
    }
}

document.addEventListener("DOMContentLoaded", generate);
