// reveal story
const lines = document.querySelectorAll(".line");
let index = 0;

function showNext(){
    if(index < lines.length){
        lines[index].classList.add("show");
        index++;
        setTimeout(showNext, 1200);
    }
}
setTimeout(showNext, 800);


// buttons flow
const pickupBtn = document.getElementById("pickupBtn");
const pickup = document.getElementById("pickupLine");

const waitBtn = document.getElementById("waitBtn");
const waitMessage = document.getElementById("waitMessage");

const photoBtn = document.getElementById("photoBtn");
const photoBox = document.getElementById("photoBox");

pickupBtn.addEventListener("click", () => {
    pickup.classList.add("show");
    pickupBtn.style.display = "none";
    waitBtn.style.display = "inline-block";
});

waitBtn.addEventListener("click", () => {
    waitMessage.classList.add("show");
    waitBtn.style.display = "none";
    photoBtn.style.display = "inline-block";
});

photoBtn.addEventListener("click", () => {
    photoBox.classList.add("show");
    photoBtn.style.display = "none";
});


// floating hearts
const heartContainer = document.querySelector(".hearts");

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 10 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);
