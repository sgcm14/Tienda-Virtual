<?php
session_start();
/*
// Verifica si el usuario está logueado y es un administrador
if (!isset($_SESSION['usuario']) || $_SESSION['tipo_usuario'] !== 'admin') {
    header("Location: login.php");
    exit();
}
    */

// Conectar a la base de datos
require 'conexion.php';

// Verifica si se ha proporcionado un ID
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM usuarios WHERE id = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 0) {
        die("Usuario no encontrado.");
    }

    $usuario = $resultado->fetch_assoc();
} else {
    die("ID de usuario no proporcionado.");
}

// Actualizar usuario si el formulario se envía
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario_input = $_POST['usuario'];
    $clave = $_POST['clave']; // Obtener la nueva contraseña
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $celular = $_POST['celular'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $id_rol = $_POST['id_rol'];

    // Si se proporciona una nueva contraseña, hashearla
    if (!empty($clave)) {
        $clave = password_hash($clave, PASSWORD_DEFAULT);
        $sql = "UPDATE usuarios SET usuario=?, clave=?, nombre=?, apellidos=?, celular=?, direccion=?, email=?, id_rol=? WHERE id=?";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("sssssiiii", $usuario_input, $clave, $nombre, $apellidos, $celular, $direccion, $email, $id_rol, $id);
    } else {
        // Si no se proporciona una nueva contraseña, no actualizar la columna de clave
        $sql = "UPDATE usuarios SET usuario=?, nombre=?, apellidos=?, celular=?, direccion=?, email=?, id_rol=? WHERE id=?";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("ssssiiii", $usuario_input, $nombre, $apellidos, $celular, $direccion, $email, $id_rol, $id);
    }

    if ($stmt->execute()) {
        $_SESSION['mensaje_exito'] = "Usuario actualizado con éxito.";
        header("Location: admin_dashboard.php");
        exit();
    } else {
        $_SESSION['mensaje_error'] = "Error al actualizar el usuario.";
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editar Usuario</title>
</head>
<body>
    <h1>Editar Usuario</h1>
    <form method="POST">
        <br>
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" value="<?php echo htmlspecialchars($usuario['usuario']); ?>" required>
        <br>
        <label for="clave">Contraseña (dejar en blanco si no se desea cambiar):</label>
        <input type="password" name="clave" placeholder="Ingrese su nueva clave (opcional)">
        <br>
        <label>Nombre:</label>
        <input type="text" name="nombre" value="<?php echo htmlspecialchars($usuario['nombre']); ?>" required><br>
        <label>Apellidos:</label>
        <input type="text" name="apellidos" value="<?php echo htmlspecialchars($usuario['apellidos']); ?>" required><br>
        <label>Celular:</label>
        <input type="text" name="celular" value="<?php echo htmlspecialchars($usuario['celular']); ?>"><br>
        <label>Dirección:</label>
        <input type="text" name="direccion" value="<?php echo htmlspecialchars($usuario['direccion']); ?>"><br>
        <label>Email:</label>
        <input type="email" name="email" value="<?php echo htmlspecialchars($usuario['email']); ?>" required><br>
        <label>Rol:</label>
        <select name="id_rol" required>
            <option value="1" <?php if($usuario['id_rol'] == 1) echo 'selected'; ?>>Administrador</option>
            <option value="2" <?php if($usuario['id_rol'] == 2) echo 'selected'; ?>>Cliente</option>
        </select><br>
        <input type="submit" value="Actualizar Usuario">
    </form>
    <a href="admin_dashboard.php">Volver al Dashboard</a>
</body>
</html>

<?php
// Cerrar conexión
$conexion->close();
?>
