var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

var submitBtn = document.getElementById("submitBtn");


function validateForm(){

if(nameInput.value.trim() === ""){
    nameError.textContent = "Name cannot be empty";
} else {
    nameError.textContent = "";
    nameValid = true;
}


let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(emailInput.value.match(emailPattern)){
    emailError.textContent = "Enter a valid email";
} else {
    emailError.textContent = "";
    emailValid = true;
}


if(passwordInput.value.length < 6){
    passwordError.textContent = "Password must be at least 6 characters";
} else {
    passwordError.textContent = "";
    passwordValid = true;
}


if(nameValid && emailValid && passwordValid){
    submitBtn.disabled = false;
} else {
    submitBtn.disabled = true;
}

}


nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);


document.getElementById("registerForm").addEventListener("submit", function(popup)
{
    popup.preventDefault();
    alert("Registration Successful!");
});