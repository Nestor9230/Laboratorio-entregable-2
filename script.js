// Funcion para validar el formulario
function validateForm() {
    let name = document.getElementById('name').value;
    let reason = document.getElementById('reason').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('formMessage');

    // Verificar si los campos estan vacios
    if (name === "" || reason === "" || email === "") {
        message.textContent = "Todos los campos son obligatorios.";
        message.style.color = "red";
        return false;
    }

    // Validacion de correo electronico (basico)
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Por favor, ingrese un correo electronico valido.";
        message.style.color = "red";
        return false;
    }

    // Si todo esta bien
    message.textContent = "Formulario enviado correctamente.";
    message.style.color = "green";
    return true; // Continuar con el envio
}