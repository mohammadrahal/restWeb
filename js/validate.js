const fname = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('text');
const submit = document.getElementById('submit');
const errorEl = document.querySelectorAll(".error");
const succ = document.getElementById('succ');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submit.addEventListener('click', () => {
    errorEl.forEach(error => {
        error.textContent = "";
    });

    if (fname.value == null || fname.value == "") {
        errorEl.forEach(error => {
            error.textContent = "Name can't be blank";
        });
        clearErrorMessage(errorEl, 3000);
        return false;
    }

    if (email.value == null || email.value == "" || !emailRegex.test(email.value)) {
        errorEl.forEach(error => {
            error.textContent = "Please enter a valid email";
        });
        clearErrorMessage(errorEl, 3000);
        return false;
    } 
    
    if (text.value == null || text.value == "") {
        errorEl.forEach(error => {
            error.textContent = "Message can't be empty";
        });
        clearErrorMessage(errorEl, 3000);
        return false;
    } else {
        succ.textContent = 'Message sent successfully';
        clearSuccessMessage(succ, 3000);
    }
});

function clearErrorMessage(errors, timeout) {
    setTimeout(() => {
        errors.forEach(error => {
            error.textContent = "";
        });
    }, timeout);
}

function clearSuccessMessage(element, timeout) {
    setTimeout(() => {
        element.textContent = "";
    }, timeout);
}
