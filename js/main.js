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

// MENÚ
const enlaces = document.querySelectorAll('.menu a');

        // SECCIONES
        const secciones = document.querySelectorAll('section');
        secciones.forEach((seccion) => {
            seccion.style.display = 'none';
        });

        // MOSTRAR LA SECCIÓN
        const id = enlace.getAttribute('href').substring(1); 
        const seccionMostrar = document.getElementById(id);
        if (seccionMostrar) {
    seccionMostrar.style.display = 'block';
}
document.getElementById('inicio').style.display = 'block';