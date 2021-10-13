//Controlador
var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'DBSprint'
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});
//Controlador

conexion.query('SELECT usuario, contrasena, fecha_registro FROM usuarios;', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

conexion.end();