function submitReview() {
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    if (!name || isNaN(rating) || rating < 1 || rating > 5 || !comment) {
      showError('Please fill all fields correctly.');
      return;
    }

    clearErrors();
    addReview(name, rating, comment);
    clearForm();
  }

  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    reviewForm.appendChild(errorDiv);
  }

  function clearErrors() {
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(div => div.remove());
  }

  function addReview(name, rating, comment) {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    reviewDiv.innerHTML = `<strong>${name}</strong> rated ${rating}/5:<br>${comment}`;
    document.getElementById('reviews').appendChild(reviewDiv);
  }

  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('comment').value = '';
  }