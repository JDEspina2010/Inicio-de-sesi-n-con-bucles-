function inicio() {
    let usuariosRegistrados = ["Josue", "Mario", "Andy"];
    let contrasenasRegistradas = ["1234", "6767", "7676"];

    let usuarioIngresado = document.getElementById("exampleInputEmail1").value.trim();
    let contrasenaIngresada = document.getElementById("exampleInputPassword1").value.trim();
    let notificacion = document.getElementById("notificacion");

    if (usuarioIngresado === "" && contrasenaIngresada === "") {
        notificacion.textContent = "Llene todas las casillas por favor.";
        notificacion.style.color = "red";
        return;
    }

    let accesoConcedido = false;

    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i] === usuarioIngresado &&
            contrasenasRegistradas[i] === contrasenaIngresada) {
            accesoConcedido = true;
            break; 
        }
    }

    if (accesoConcedido) {
        notificacion.textContent = "Inicio de sesión correcto";
        notificacion.style.color = "green";
        alert("Inicio de sesión correcto")
        window.location.href="Inicio.html"
    } else {
        notificacion.textContent = "Usuario y/o contraseña incorrecto";
        notificacion.style.color = "red";
    }
}