// $(".message a").click(function () {
//     $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
//   });
const form_login = document.getElementById('form_login');
const login_captcha = document.getElementById('login_captcha');
const user_in = document.getElementById("login_username");
const contrasena_in = document.getElementById("login_password");

form_login.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault();
    //validar_captcha(login_captcha.value);
    iniciar_sesion(user_in.value, contrasena_in.value);
});
let registros = [];
registros = [
    {
        usuario: "Jhon",
        contrasena: "123456",
        confirmar_contrasena: "123456"
    },
    {
        usuario: "James Vargas",
        contrasena: "123456",
        confirmar_contrasena: "123456"
    },
    {
        usuario: "Jonathan Parra",
        contrasena: "654321",
        confirmar_contrasena: "654321"
    }
];
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
function validar_captcha(rcaptcha) {
    if (rcaptcha == 5) {
        //  alert("CAPTCHA VALIDO");
        return true;
    } else {
        //  alert("ERROR CAPTCHA");
        return false;
    }
}

function iniciar_sesion(usuario, contrasena) {


//Algoritmo de validacion de Captcha 
    const userCaptcha = login_captcha.value;
    if (validar_captcha(userCaptcha)) {
//Algoritmo comparacion de usuario base de datos
        for (var i in registros) {
            if (registros[i].usuario == usuario && registros[i].contrasena == contrasena) {
                alert("PASO VALIDACION Y CAPTCHA");
                return true;
            }
            
        }
        alert("USUARIO INVALIDO");
        return false;
    } else {
        alert("ERROR CAPTCHA");
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