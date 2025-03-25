document.getElementById("showPassword").addEventListener("change", function () {
    let passwordInput = document.getElementById("passwordInput");
    if (this.checked) {
        passwordInput.type = "text"; // Show password
    } else {
        passwordInput.type = "password"; // Hide password
    }
});
