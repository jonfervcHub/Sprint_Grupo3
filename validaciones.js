const form_registrarse = document.getElementById('form_registrarse');
const in_nombre_usuario = document.getElementById('in_nombre_usuario');
const in_contrasena = document.getElementById('in_contrasena');
const in_confirmar_contrasena = document.getElementById('in_confirmar_contrasena');
const errorUserName = document.getElementById('errorUserName');
const errorPassword = document.getElementById('errorPassword');
const errorPasswordConfirm = document.getElementById('errorPasswordConfirm');

form_registrarse.addEventListener('submit', (eventObject)=> {
    eventObject.preventDefault();
    if (validar_nombre_usuario(in_nombre_usuario.value) && 
        validar_contrasena(in_contrasena.value) && 
        confirmar_contrasena(in_contrasena.value, in_confirmar_contrasena.value))
    {
        alert('Registro Exitoso!')
    } else {
        alert('Registro No Exitoso!')
    }
});

in_nombre_usuario.addEventListener('blur', (eventObject) => {
    if (validar_nombre_usuario(in_nombre_usuario.value)){
        errorUserName.classList.remove('validation__message')
    } else {
        errorUserName.classList.add('validation__message')
    }
});

in_contrasena.addEventListener('blur', (eventObject) => {
    if (validar_contrasena(in_contrasena.value)){
        errorPassword.classList.remove('validation__message')
    } else {
        errorPassword.classList.add('validation__message')
    }
});

in_confirmar_contrasena.addEventListener('blur', (eventObject) => {
    if (confirmar_contrasena(in_contrasena.value, in_confirmar_contrasena.value)){
        errorPasswordConfirm.classList.remove('validation__message')
    } else {
        errorPasswordConfirm.classList.add('validation__message')
    }
});

function validar_nombre_usuario(string){
    /*
    Author: jhonjgonzalezt@gmail.com
    Function: validateUsername(string) || validar_nombre_usuario(string)
    Parameter: string
    Description: Not case sensitive, this function validates that a username meets the following conditions:
    1. It must be between 6 and 30 characters.
    2. It can only contain characters only letters from A to Z, they can be both uppercase and lowercase.
    */
    const regEx = /^[a-zA-Z]{6,30}$/
    if (regEx.test(string)) {
        return true;
    } else {
        return false;
    }
}

function validar_contrasena(string){
    /*
    Author: jhonjgonzalezt@gmail.com
    Function: validateUsername(string) || validar_contrasena(string)
    Parameter: string
    Description: Not case sensitive, this function validates that a username meets the following conditions:
    1. Must be 6 or more characters.
    2. It can only contain alphanumeric characters. That is, letters from A to Z and numbers from 0 to 9. 
    */
    const regEx = /^[a-zA-Z0-9]{6,}$/
    if (regEx.test(string)) {
        return true;
    } else {
        return false;
    }
}

function confirmar_contrasena(stringA, stringB){
    if (stringA === stringB){
        return true;
    } else {
        return false;
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;
