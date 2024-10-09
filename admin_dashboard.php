<?php
session_start();

// Verifica si las variables de sesión están configuradas correctamente
if (!isset($_SESSION['usuario']) || !isset($_SESSION['tipo_usuario'])) {
  echo "Las variables de sesión no están configuradas.";
  exit();
}

// Verificar si el usuario es administrador
if ($_SESSION['tipo_usuario'] != 'admin') {
  header("Location: login.html"); // Redirige si no está autenticado
  exit();
}

// Aquí el contenido de la página de administración
echo "Bienvenido, " . $_SESSION['usuario'] . " (Administrador)";

// Conectar a la base de datos
require 'conexion.php';

// Obtener la lista de usuarios
$sql = "SELECT * FROM usuarios";
$resultado = $conexion->query($sql);
?>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Dashboard Administrador </title>
    <link href="assets/css/style.css" rel="stylesheet" type="text/css">
  <link rel="apple-touch-icon" href="assets/img/mestel.png">
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/mestel.ico.ico">
</head>
<body>
<header>
    <div class="menu logo-nav">
      <a href="index.html">
        <img src="assets/img/result_mestel.jpg" alt="Mestel Logo" class="logo-image">
      </a>
    
      <label class="menu-icon"><span class="fas fa-bars icomin"></span></label>
      <nav class="navigation">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="productos.html">Productos</a></li>
          <li><a href="contacto.html">Contacto</a></li>
         
          <li class="car"><a href="carrito.html" >
            <svg class="bi bi-cart3" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg></a>
          </li>
          <div id="userLogin"></div>
         <!-- <a href="logout.php">Cerrar sesión</a>-->
        </ul>
      </nav>
    </div>
  </header>

  <br>
    <br>
    <div class="container-contacto">  
  <h1>Bienvenido al Dashboard de Administrador</h1>
  
  
    <form method="POST" action="agregar_usuario.php">
    <h2>Agregar Usuario</h2>
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" required>
        <br>
        <label for="clave">Contraseña:</label>
        <input type="password" name="clave" required>
        <br>
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required>
        <br>
        <label for="apellidos">Apellidos:</label>
        <input type="text" name="apellidos" required>
        <br>
        <label for="celular">Celular:</label>
        <input type="text" name="celular">
        <br>
        <label for="direccion">Dirección:</label>
        <input type="text" name="direccion">
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email" required>
        <br>
        <label for="id_rol">Rol:</label>
        <select name="id_rol" required>
            <option value="1">Administrador</option>
            <option value="2">Cliente</option>
        </select>
        <br>
        <input type="submit" value="Agregar Usuario">
    </form>
    </div>

    <div class="container-contacto"> 
    <h2>Lista de Usuarios</h2>
    <table border="2">
        <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Rol</th>
            <th>Acciones</th>
        </tr>
        <?php while ($usuario = $resultado->fetch_assoc()): ?>
            <tr>
                <td><?php echo $usuario['id']; ?></td>
                <td><?php echo $usuario['usuario']; ?></td>
                <td><?php echo $usuario['nombre']; ?></td>
                <td><?php echo $usuario['apellidos']; ?></td>
                <td><?php echo $usuario['id_rol'] === 1 ? 'Administrador' : 'Cliente'; ?></td>
                <td>
                    <a href="editar_usuario.php?id=<?php echo $usuario['id']; ?>">Editar</a>
                    <a href="eliminar_usuario.php?id=<?php echo $usuario['id']; ?>">Eliminar</a>
                </td>
            </tr>
        <?php endwhile; ?>
    </table>
    <br>
    <script src="assets/js/auth.js"></script>
    </div>
</body>
</html>

<?php
// Cerrar conexión
$conexion->close();
?>