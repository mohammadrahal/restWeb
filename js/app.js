

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

