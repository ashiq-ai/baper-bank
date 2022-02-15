document.getElementById('login-submit').addEventListener('click', function () {
    // get email.
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get password.
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    if (userEmail == 'ashikdas@gmail.com' && userPass == 'abcde') {
        window.location.href = 'bannk.html';

    }
})