function showMessage() {
    const messageElement = document.getElementById('message');
    const homeButton = document.getElementById('homeBtn');
    messageElement.style.display = 'block';  // Mostrar el mensaje
    homeButton.style.display = 'inline-block'; // Mostrar el botón de volver al home
}

function goHome() {
    window.location.href = 'index.html'; // cambia al incio html
}
