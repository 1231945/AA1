
function validateForm() {
    // Reset error messages
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("bdate-error").innerHTML = "";
    document.getElementById("sex-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("username-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("confirmPassword-error").innerHTML = "";
    document.getElementById("interest-error").innerHTML = "";
    document.getElementById("comfort-error").innerHTML = "";
    document.getElementById("awareness-error").innerHTML = "";
    document.getElementById("success").innerHTML = "";

    let isValid = true;

    // Get form values
    var name = document.getElementById("name").value;
    var bdate = document.getElementById("bdate").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var comfortLevel = document.getElementById("comfort").value;
    var awarenessRadios = document.getElementsByName("awareness");
    var sexRadios = document.getElementsByName("sex");

    // Determine selected sex value
    var sexValue = null;
    for (let i = 0; i < sexRadios.length; i++) {
        if (sexRadios[i].checked) {
            sexValue = sexRadios[i].value;
            break;
        }
    }

    // Personal Info Validation
    if (name.trim() === "") {
        document.getElementById("name-error").innerHTML = "Name is required.";
        isValid = false;
    }
    if (name.length < 2) {
        document.getElementById("name-error").innerHTML = "Name must be at least 2 characters long.";
        isValid = false;
    }

    if (bdate === "") {
        document.getElementById("bdate-error").innerHTML = "Birthdate is required.";
        isValid = false;
    } else {
        var today = new Date();
        var birthDate = new Date(bdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 13) {
            document.getElementById("bdate-error").innerHTML = "You must be at least 13 years old.";
            isValid = false;
        }
    }

    if (sexValue === null) {
        document.getElementById("sex-error").innerHTML = "Sex is required.";
        isValid = false;
    }

    // Account Details Validation
    if (email === "") {
        document.getElementById("email-error").innerHTML = "Email is required.";
        isValid = false;
    } else {
        var atIndex = email.indexOf("@");
        if (atIndex === -1) {
            document.getElementById("email-error").innerHTML = "Email must contain @.";
            isValid = false;
        } else if (email.indexOf(".", atIndex) === -1) {
            document.getElementById("email-error").innerHTML = "Email must contain a dot after the @ symbol.";
            isValid = false;
        }
    }
    //validates username
    var usernameTest = /^[a-zA-Z0-9]{8,20}$/;
    if (!usernameTest.test(username)) {
        if (username.length < 8) {
            document.getElementById("username-error").innerHTML = "Username must be at least 8 characters long.";
        } else if (username.length > 20) {
            document.getElementById("username-error").innerHTML = "Username must not exceed 20 characters.";
        } else {
            document.getElementById("username-error").innerHTML = "Username must contain only letters and digits.";
        }
        isValid = false;
    }
    //validates password
    if (password === "") {
        document.getElementById("password-error").innerHTML = "Password is required.";
        isValid = false;
    } else if (password.length < 10) {
        document.getElementById("password-error").innerHTML = "Password must be at least 10 characters long.";
        isValid = false;
    } else {
        let hasUpper = false;
        let hasLower = false;
        let hasNumber = false;
        for (let i = 0; i < password.length; i++) {
            const ch = password[i];
            if (ch >= 'A' && ch <= 'Z') {
                hasUpper = true;
            } else if (ch >= 'a' && ch <= 'z') {
                hasLower = true;
            } else if (ch >= '0' && ch <= '9') {
                hasNumber = true;
            }
        }
        if (!hasUpper) {
            document.getElementById("password-error").innerHTML = "Password must contain at least one uppercase letter.";
            isValid = false;
        } else if (!hasLower) {
            document.getElementById("password-error").innerHTML = "Password must contain at least one lowercase letter.";
            isValid = false;
        } else if (!hasNumber) {
            document.getElementById("password-error").innerHTML = "Password must contain at least one digit.";
            isValid = false;
        }
    }
    //validates confirm password
    if (password !== confirmPassword) {
        document.getElementById("confirmPassword-error").innerHTML = "Passwords do not match.";
        isValid = false;
    }
    // interest validation
    const interestCheckboxes = document.getElementsByName("i");
    let interestChecked = false;
    for (let i = 0; i < interestCheckboxes.length; i++) {
        if (interestCheckboxes[i].checked) {
            interestChecked = true;
            break;
        }
    }
    if (!interestChecked) {
        document.getElementById("interest-error").innerHTML = "Please select at least one interest.";
        isValid = false;
    }
    //comfort validation
    if (comfortLevel === "") {
        document.getElementById("comfort-error").innerHTML = "Please select comfort level.";
        isValid = false;
    }
   
   
    // awareness validation
    let awarenessSelected = false;
    for (let i = 0; i < awarenessRadios.length; i++) {
        if (awarenessRadios[i].checked) {
            awarenessSelected = true;
            break;
        }
    }
    
    if (!awarenessSelected) {
        document.getElementById("awareness-error").innerHTML = "Please select your awareness level.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success").innerHTML = "Form submitted successfully!";
    }

    return isValid;
}


