const form = document.querySelector('form');
form.addEventListener('submit', e => {
    if(!form.checkValidity()) {
        e.preventDefault();
        // alert("Please fill out the form!");
        // document.getElementById('alert').style.display = "block";
        // document.getElementById('alert').innerHTML = "Please fill out the form!";
        // return false;
    }
    form.classList.add('was-validated');
});

