const submit = document.querySelector(".submit-button");
const enterPassword = document.querySelector("#enterPassword");
const confirmPassword = document.querySelector("#confirmPassword");

function matchPasswords(){
    if(enterPassword.value === confirmPassword.value) {
       console.log("Password Matched. Password validation Successful.");
       alert("Password Matched. Password validation Successful.");
    } else {
       console.log("Password didn't match. Password validation unsuccessful");
       alert("Password didn't match. Password validation unsuccessful");
    }
}

submit.addEventListener("click", matchPasswords);