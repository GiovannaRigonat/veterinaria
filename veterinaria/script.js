function mostrarMensaje() {
    alert("¡Gracias por tu interés! Pronto nos comunicaremos contigo.");
}

// Validación básica del formulario
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Formulario enviado correctamente.");
    this.reset();
});