document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('loggedInUser', email);
        window.location.href = 'index.html';
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
