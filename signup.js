const passwordInput= document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
let actualPassword='';
function updatePassword() {
    if(!showPasswordCheckbox.checked) {
        actualPassword = passwordInput.value;
        passwordInput.value='*'.repeat(actualPassword.length);
    }
    else{
        passwordInput.value=actualPassword;
    }
}
showPasswordCheckbox.addEventListener('change', function() {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = '*';
    }
});