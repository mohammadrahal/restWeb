const fname = document.getElementById('name');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const errorEl = document.querySelectorAll(".error"); 

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submit.addEventListener('click', () => {
    errorEl.forEach(error => {
        error.textContent = "";
    });

    if (fname.value == null || fname.value == "") {
        errorEl.forEach(error => {
            error.textContent = "Name can't be blank";
        });
        clear(errorEl, 3000);
        return false;
    }

    if (email.value == null || email.value == "" || !emailRegex.test(email.value)) {
        errorEl.forEach(error => {
            error.textContent = "Please enter a valid email";
        });
        clear(errorEl, 3000);
        return false;
    } else {
        console.log('Form submitted successfully');
    }
});

function clear(errors, timeout) {
    setTimeout(() => {
        errors.forEach(error => {
            error.textContent = "";
        });
    }, timeout);
}
