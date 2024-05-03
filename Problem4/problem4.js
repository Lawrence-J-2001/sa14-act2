function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("usernameConfirmation").innerHTML = "";
    document.getElementById("emailConfirmation").innerHTML = "";
    document.getElementById("passwordConfirmation").innerHTML = "";

    var valid = true;

    if (username.length < 6) {
        document.getElementById("usernameError").innerHTML = "Username must be at least 6 characters";
        valid = false;
    } else {
        document.getElementById("usernameConfirmation").innerHTML = "&#10004;";
        document.getElementById("usernameConfirmation").classList.add("valid-input");
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        valid = false;
    } else {
        document.getElementById("emailConfirmation").innerHTML = "&#10004;";
        document.getElementById("emailConfirmation").classList.add("valid-input");
    }

    var passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long and contain at least one capital letter and one number";
        valid = false;
    } else {
        document.getElementById("passwordConfirmation").innerHTML = "&#10004;";
        document.getElementById("passwordConfirmation").classList.add("valid-input");
    }

    if (valid) {
        alert("Registration successful!");
        document.getElementById("registrationForm").reset();
    }
}