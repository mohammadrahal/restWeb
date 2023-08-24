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

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  if (app) { // Check if the element was found
      window.addEventListener('scroll', () => {
        console.log("app")
          const windowHeight = window.innerHeight;
          const scrollPosition = window.scrollY;
          const documentHeight = document.documentElement.scrollHeight;

          const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

          app.style.opacity = `${1 - scrollPercentage / 100}`;
      });
  }
});




// const slider = document.querySelector('.grid-specialMenu');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', e => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', _ => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', _ => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const SCROLL_SPEED = 3;
//   const walk = (x - startX) * SCROLL_SPEED;
//   slider.scrollLeft = scrollLeft - walk;
// });

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});