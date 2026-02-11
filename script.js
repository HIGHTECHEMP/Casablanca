const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeMenu");

function openMenu(){
menu.classList.add("active");
overlay.classList.add("active");
toggle.style.display = "none";
}

function closeMenu(){
menu.classList.remove("active");
overlay.classList.remove("active");
toggle.style.display = "flex";
}

toggle.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-menu a").forEach(link => {
link.addEventListener("click", closeMenu);
});

const cards = document.querySelectorAll(".food-card");

window.addEventListener("scroll", () => {

cards.forEach(card => {
const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});
