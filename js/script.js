document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    let isValid = true;

    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "First name is required.";
        isValid = false;
    } else {
        document.getElementById("firstNameError").textContent = "";
    }

    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "Last name is required.";
        isValid = false;
    } else {
        document.getElementById("lastNameError").textContent = "";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            password: password
        };
        console.log(formData);
    }
});



