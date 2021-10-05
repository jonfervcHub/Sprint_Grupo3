var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Root-123',
    database : 'Sprints_B4',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});


conexion.query('SELECT * FROM usuarios ORDER BY usuario DESC LIMIT 5', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

conexion.end();