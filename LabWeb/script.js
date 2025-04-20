function saludar() {
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje");
    
    if (nombre) {
        mensaje.innerHTML = `¡Hola, ${nombre}! Gracias por contactarme.`;
    } else {
        mensaje.innerHTML = "Por favor, escribe tu nombre.";
    }
}