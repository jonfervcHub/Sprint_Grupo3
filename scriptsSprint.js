

function validar_nombre_usuario(){
    var nombreU = document.getElementById("in_nombre_usuario");
    var cantidadCaracteres = nombreU.length;
    console.log(cantidadCaracteres);
    if (nombreU.length>2 ) {
        console.log("cumple");
    } else {
        console.log("no cumple")
    }
}
/*var nombreU = document.getElementById("in_nombre_usuario");
    var cantidadCaracteres = nombreU.length;*/
function ejecucionButton(){
    console.log("click");
    }