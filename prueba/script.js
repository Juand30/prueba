function showMessage() {
    const messageElement = document.getElementById('message');
    const homeButton = document.getElementById('homeBtn');
    messageElement.style.display = 'block';  // Mostrar el mensaje
    homeButton.style.display = 'inline-block' // Mostrar boton de volver al home
}

function goHome() {
    window.scrollTo(0,0);
}
