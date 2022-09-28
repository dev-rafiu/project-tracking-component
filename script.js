const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  header.classList.add("display");
  nav;
});
closeBtn.addEventListener("click", () => {
  header.classList.remove("display");
});
