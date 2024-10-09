const mysql = require('mysql');

// Configurar conexión a la base de datos mestel_bd
const connection = mysql.createConnection({
  host: 'localhost',
  port: 8080,              // Puerto por defecto de MySQL
  user: 'root',            // Cambia esto si usas otro usuario
  password: '',            // Introduce tu contraseña si tienes una
  database: 'mestel_bd'     // Nombre de tu base de datos
});

// Conectar a MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a MySQL establecida.');
});

module.exports = connection;
