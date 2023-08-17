const fname = document.getElementById('name');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const error = document.getElementById('error')

submit.addEventListener('click', () => {
    // console.log("hello world!")
    if (fname.value == null || fname.value == "") {
        error.textContent= "Name can't be blank";
        return false;
    }

    if (email.value == null || email.value == "") {
        error.textContent= "please enter email";
        return false;
    }
} ); 