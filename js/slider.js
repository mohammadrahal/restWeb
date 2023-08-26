document.addEventListener('DOMContentLoaded', () => {
  let i = 0;
  let images = ["../assets/home.jpg", "../assets/hero-section.jpg"];
  let time = 1000;
  let paused = false;

  const slide = document.getElementById('slide');

  // Function to handle changing images
  function handleChange() {
    if (!paused) {
      slide.src = images[i];
      if (i < images.length - 1) {
        i++;
      } else {
        i = 0;
      }
    }
    setTimeout(handleChange, time);
  }

  // Slideshow pause functionality
  function pause() {
    paused = !paused;
  }

  // Get the bullets container
  const bulletsContainer = document.getElementById('bullets');

  // Function to create bullets
  function createBullets() {
    images.forEach((_, index) => {
      const bullet = document.createElement('span');
      bullet.className = 'bullet';
      // Add a click event to each bullet
      bullet.addEventListener('click', () => jumpToSlide(index));
      bulletsContainer.appendChild(bullet);
    });
  }

  // Function to handle jumping to a specific slide
  function jumpToSlide(index) {
    i = index;
    slide.src = images[i];
    updateBullets();
  }

  // Function to update the active bullet
  function updateBullets() {
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach((bullet, index) => {
      if (index === i) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  }

  // Create bullets and start the slideshow
  createBullets();
  handleChange();
});
