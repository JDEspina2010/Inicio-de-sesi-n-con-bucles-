const usuariosRegistrados = [
  { usuario: "admin@gmail.com", pass: "1234" },
  { usuario: "user123@gmail.com", pass: "abcd" }
];

function inicio() {
  const correoInput = document.getElementById("exampleInputEmail1").value;
  const passInput = document.getElementById("exampleInputPassword1").value;
  const notificacion = document.getElementById("notificacion");

  let usuarioEncontrado = false;

  for (let i = 0; i < usuariosRegistrados.length; i++) {
    if (usuariosRegistrados[i].usuario === correoInput && usuariosRegistrados[i].pass === passInput) {
      usuarioEncontrado = true;
      break; 
    }
  }

  if (usuarioEncontrado) {
    notificacion.style.color = "#4E9F3D";
    notificacion.textContent = "¡Inicio de sesión exitoso!";
  } else {
    notificacion.style.color = "#D90429";
    notificacion.textContent = "Usuario o contraseña incorrectos.";
  }
}

function registrar() {
  const correoReg = document.getElementById("emailRegistro").value;
  const passReg = document.getElementById("passRegistro").value;
  const notificacionReg = document.getElementById("notificacionRegistro");

  let existe = false;

  usuariosRegistrados.forEach(function(item) {
    if (item.usuario === correoReg) {
      existe = true;
    }
  });

  if (existe) {
    notificacionReg.style.color = "#D90429";
    notificacionReg.textContent = "Este correo ya está registrado.";
  } else {
    usuariosRegistrados.push({ usuario: correoReg, pass: passReg });
    
    notificacionReg.style.color = "#4E9F3D";
    notificacionReg.textContent = "¡Registro exitoso! Ya puedes iniciar sesión.";
    
    console.log("Usuarios actualizados en el Array:", usuariosRegistrados);
  }
}