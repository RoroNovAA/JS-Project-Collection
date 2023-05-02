const submitButton = document.querySelector(".submit-button");
const errorMessage = document.querySelector(".error-message");

/* MAIN FUNCTION */
 function validateForm() {
    let emailField = document.querySelector("#enter-email").value;
    let pswdField = document.querySelector("#enter-psw").value;

    errorMessage.innerHTML = emailField.includes("@") && pswdField.length >= 8 
    ? "<span style='color:green;'> Valid email and password! </span>"
    : "<span style='color:red;'> Invalid email or password! </span>";
}

/* EVENT LISTENER */
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    validateForm();
}); 
