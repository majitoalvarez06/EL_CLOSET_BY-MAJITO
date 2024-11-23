document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const user = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        password: event.target.password.value,
        gender: event.target.gender.value
    };
    localStorage.setItem(user.email, JSON.stringify(user));
    alert('Registro completado');
    window.location.href = 'login.html';
});