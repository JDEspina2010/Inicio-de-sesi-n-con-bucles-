function inicio() {
    let ususario = ["Josue", "Mario", "Andy"];
    let contraseña = ["1234", "6767", "7676"];
        if (usuario === "" && contrasena == "") {
        document.getElementById("notificacion").textContent = "Inicio de sesión correcto"
    } else if (usuario == "" && contrasena == "") {
        document.getElementById("notificacion").textContent = "Llene todas las casillas por fabor"
    } else if (usuario != "" && contrasena == "") {
        document.getElementById("notificacion").textContent = "Llene el espacio de contraseña"
    } else if (usuario == "" && contrasena != "") {
        document.getElementById("notificacion").textContent = "Llene el espacio de usuario"
    } else {
        document.getElementById("notificacion").textContent = "Usuario y/o contraseña incorrecto"
    }
    for (let i = 0; i < 3; i++){
        if (ususario[i] == document.getElementById("usuario"))
            
    }

}

