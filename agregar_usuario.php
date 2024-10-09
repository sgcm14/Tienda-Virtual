<?php
session_start();
require 'conexion.php'; // Incluye tu archivo de conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $usuario = $_POST['usuario'];
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT); // Hashear la contraseña
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $celular = $_POST['celular'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $id_rol = $_POST['id_rol'];

    // Preparar la consulta SQL para insertar un nuevo usuario
    $sql = "INSERT INTO usuarios (usuario, clave, nombre, apellidos, celular, direccion, email, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);

    // Cambiar la cadena de tipos para coincidir con los tipos de datos en la base de datos
    $stmt->bind_param("sssssisi", $usuario, $clave, $nombre, $apellidos, $celular, $direccion, $email, $id_rol);

    // Ejecutar la consulta y verificar si se insertó correctamente
    if ($stmt->execute()) {
        $_SESSION['mensaje_exito'] = "Usuario agregado exitosamente.";
    } else {
        $_SESSION['mensaje_error'] = "Error al agregar el usuario: " . $stmt->error;
    }

    // Redirigir al dashboard de administrador
    header("Location: admin_dashboard.php");
    exit();
}

// Cerrar conexión
$conexion->close();
?>
