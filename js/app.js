

const hamburger = document.querySelector(".hamburger")
const menu_header = document.querySelector(".menu_header")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu_header.classList.toggle("active");

})


function toggleAnswer(index) {
  let buttons = document.querySelectorAll(".question-btn");
  let arrowIcon = buttons[index].querySelector("i");
  let answerDiv = buttons[index].nextElementSibling;

  if (answerDiv.style.display === "none") {
    answerDiv.style.display = "block";
    arrowIcon.classList.add("fa-chevron-up");
    arrowIcon.classList.remove("fa-chevron-down");
  } else {
    answerDiv.style.display = "none";
    arrowIcon.classList.add("fa-chevron-down");
    arrowIcon.classList.remove("fa-chevron-up");
  }
}


//map
let map = L.map('map').setView([33.89045843306141, 35.50522064129898], 30);


        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let marker = L.marker([33.89045843306141, 35.50522064129898]).addTo(map);