const background = document.querySelector(".background04");
const hamburger = document.querySelector(".hamburgerBtn04");
const high =document.querySelector(".high04");
const mid =document.querySelector(".mid04");
const low =document.querySelector(".low04");
const menu =document.querySelector(".menu04");
const backBtn = document.querySelector(".backBtn04");

hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    high.classList.toggle("active");
    mid.classList.toggle("active");
    low.classList.toggle("active");
}