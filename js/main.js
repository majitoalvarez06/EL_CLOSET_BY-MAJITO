const loggedInUserEmail = localStorage.getItem('loggedInUser');
if (loggedInUserEmail) {
    const user = JSON.parse(localStorage.getItem(loggedInUserEmail));
    document.getElementById('userLink').textContent = `Hola, ${user.firstName}`;
    document.getElementById('userLink').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        alert('Sesión cerrada');
        window.location.href = 'login.html';
    });
}
