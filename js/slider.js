const myslide = document.querySelectorAll('.myslide');
const dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    
    for (let i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    
    myslide[counter - 1].style.display = "block";
   
}
