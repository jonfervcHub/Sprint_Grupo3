// $(".message a").click(function () {
//     $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
//   });


let registros = [];

function agregarRegistro() {
    function Persona(usuario, contrasena, confirmar_contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.confirmar_contrasena = confirmar_contrasena;
    }

    const usuario = in_nombre_usuario.value;
    const contrasena = in_contrasena.value;
    const confirmar_contrasena = in_confirmar_contrasena.value;

    nuevoUsuario = new Persona(usuario, contrasena, confirmar_contrasena);

    registros.push(nuevoUsuario);
    console.log(registros);
}

const login_username = document.getElementById('login_username');
const login_password = document.getElementById('login_password');
const login_captcha = document.getElementById('login_captcha');

function validar_captcha(rcaptcha){
  if (rcaptcha == 5) {
    return true;
  } else {
    return false;
  }
}

function iniciar_sesion(usuario, contrasena, rcaptcha){
  const userCaptcha = login_captcha.value;
  if (validar_captcha(userCaptcha)) {
    return true;
  } else {
    return false;
  }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;

module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;