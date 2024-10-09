<?php


session_start();
require 'conexion.php'; // Incluye tu archivo de conexión a la base de datos

// Verifica si hay un mensaje de error previo
if (isset($_SESSION['mensaje_error'])) {
    echo '<div style="color:red;">' . $_SESSION['mensaje_error'] . '</div>'; // Muestra el mensaje de error en rojo
    unset($_SESSION['mensaje_error']); // Limpiar mensaje después de mostrar
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    // Verifica el usuario en la base de datos
    $sql = "SELECT * FROM usuarios WHERE usuario = ? LIMIT 1";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $row = $resultado->fetch_assoc();

        // Verifica la contraseña
        if (password_verify($clave, $row['clave'])) {
            // Establece las variables de sesión
            $_SESSION['usuario'] = $row['usuario'];
            $_SESSION['tipo_usuario'] = $row['id_rol'] === 1 ? 'admin' : 'cliente'; // Asumiendo que el rol 1 es administrador

            // Redirige al usuario a la página de administración
            //header("Location: admin_dashboard.php"); // Asegúrate que este archivo existe
            if ($row['id_rol'] === 1) { // Verifica si el rol es admin
                header("Location: admin_dashboard.php"); // Redirige al dashboard de administración
            } else {
                header("Location: index.html"); // Redirige a un dashboard de cliente (si lo tienes)
            }
            exit();
        } else {
            $_SESSION['mensaje_error'] = "Contraseña incorrecta.";
            header("Location: login.php"); // Redirige de nuevo al login
            exit();
        }
    } else {
        $_SESSION['mensaje_error'] = "Usuario no encontrado.";
        header("Location: login.php"); // Redirige de nuevo al login
        exit();
    }
}

// Cerrar conexión
$conexion->close();

?>