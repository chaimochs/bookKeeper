var submitForm = document.getElementById("submitButton").onclick = function () {
        var errorMess = "";
       
        var nameEntered = document.getElementById("user").value;
        var passwordEntered = document.getElementById("password").value;
        var password2 = document.getElementById("repeatPassword").value;
        var countryEntered = document.getElementById("country").value;
        var phoneEntered = document.getElementById("phone").value;

        var nameError = "Name must contain at least 5 letters";
        var passwordError = "Password must contain at least 6 letters";
        var repeatError = "Passwords do not match";
        var countryError = "Sorry, only Israel and the USA are available";
        var phoneError = "Telephone numbers must be at least 15 digits long";

        document.getElementById("message").style.color = "red";

        if (nameEntered.length < 5) {
            errorMess = nameError;
        }
        if (passwordEntered.length < 6) {
            errorMess = errorMess + " <br> " + passwordError;
        }
        if (password2 !== passwordEntered) {
            errorMess = errorMess + " <br> " + repeatError;
        }
        if (countryEntered !== "Israel" && countryEntered !== "United States") {
            errorMess = errorMess + " <br> " + countryError;
        }
        if (phoneEntered.length < 15) {
            errorMess = errorMess + " <br> " + phoneError;
        }

        if (errorMess === "") {
            document.getElementById("message").style.color = "green";
            var success = "Thank you, " + nameEntered; 
            document.getElementById("message").innerHTML = success;
        } else {
            document.getElementById("message").innerHTML = errorMess;
        }
    }