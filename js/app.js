/*const hamburger = document.getElementById("burger__header");
const navLinks = document.querySelector(".navLinks");
hamburger.addEventListener("click", () => {
  console.log("hello world!");
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("toggle");
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
});*/

const hamburger = document.querySelector(".hamburger")
const menu_header = document.querySelector(".menu_header")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu_header.classList.toggle("active");

})


