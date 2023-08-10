

const hamburger = document.querySelector(".hamburger")
const menu_header = document.querySelector(".menu_header")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu_header.classList.toggle("active");

})


