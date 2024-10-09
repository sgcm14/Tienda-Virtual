<?php
session_start();
require 'conexion.php'; // Asegúrate de que este archivo se carga correctamente

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtiene los datos del formulario
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];
    $id_rol = $_POST['id_rol'];
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $celular = $_POST['celular'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];

    // Crea un hash de la contraseña
    $clave_hash = password_hash($clave, PASSWORD_DEFAULT);

    // Prepara la consulta de inserción
    $sql = "INSERT INTO usuarios (usuario, clave, id_rol, nombre, apellidos, celular, direccion) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    // Ajusta los tipos en bind_param: "ssissss" indica tipos de datos
    $stmt->bind_param("ssissss", $usuario, $clave_hash, $id_rol, $nombre, $apellidos, $celular, $direccion);

    // Ejecuta la consulta y verifica si se insertó correctamente
    if ($stmt->execute()) {
        $_SESSION['mensaje_exito'] = "Usuario registrado con éxito.";
    } else {
        $_SESSION['mensaje_error'] = "Error al registrar el usuario: " . $stmt->error;
    }

    // Redirige a la misma página para mostrar el mensaje
    header("Location: registrar_usuario.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Registrar Usuario</title>
    <link href="assets/css/style.css" rel="stylesheet" type="text/css">
    <link rel="apple-touch-icon" href="assets/img/mestel.png">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/mestel.ico.ico">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
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
                <li class="car"><a href="carrito.html">
                    <svg class="bi bi-cart3" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg></a>
                </li>
            </ul>
        </nav>
    </div>
</header>
<br>
<br>



<div class="container-contacto">
    <form method="POST">
        <h1>Registrar Usuario Para Clientes</h1>
        <br>
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" placeholder="Ingrese su usuario" required>
        <br>
        <label for="clave">Contraseña:</label>
        <input type="password" name="clave" placeholder="Ingrese su clave" required>
        <br>
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" placeholder="Ingrese su Nombre" required>
        <br>
        <label for="apellidos">Apellidos:</label>
        <input type="text" name="apellidos" placeholder="Ingrese su Apellido" required>
        <br>
        <label for="celular">Celular:</label>
        <input type="text" name="celular" placeholder="Ingrese su celular" required>
        <br>
        <label for="direccion">Dirección:</label>
        <input type="text" name="direccion" placeholder="Ingrese su direccion" required>
        <br>
        <label for="email">Email:</label>
        <input type="text" name="email" placeholder="Ingrese su email" required>
        <br>
        <label for="id_rol">Rol:</label>
        <select name="id_rol" required>
            <option value="">Seleccione un rol</option>
         <!--   <option value="1">Administrador</option> -->
            <option value="2">Cliente</option>
            <!-- Aquí puedes agregar más roles si es necesario -->
        </select>
        <br>
        <br>    
        <input type="submit" value="Registrar">
        <input type="button" value="Iniciar Sesion" onclick="location.href='login.html'">
    </form>

    <?php
    // Mostrar mensajes de éxito o error
    if (isset($_SESSION['mensaje_exito'])) {
        echo '<script>
            Swal.fire({
                icon: "success",
                title: "¡Éxito!",
                text: "' . $_SESSION['mensaje_exito'] . '",
                confirmButtonText: "Aceptar"
            });
        </script>';
        unset($_SESSION['mensaje_exito']);
    }

    if (isset($_SESSION['mensaje_error'])) {
        echo '<script>
            Swal.fire({
                icon: "error",
                title: "¡Error!",
                text: "' . $_SESSION['mensaje_error'] . '",
                confirmButtonText: "Aceptar"
            });
        </script>';
        unset($_SESSION['mensaje_error']);
    }
    ?>
</div>



<footer class="footer-section">
    <div class="copyright-area">
        <div class="container-footer">
            <div class="row-footer">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div class="copyright-text">
                        <p>Copyright &copy; 2024, todos los derechos reservados <a href="index.html">MESTEL SAC</a></p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div class="footer-menu">
                        <ul>
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="nosotros.html">Nosotros</a></li>
                            <li><a href="productos.html">Productos</a></li>
                            <li><a href="contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
<script src="assets/js/scripts.js"></script>
<script src="assets/js/contacto.js"></script>




</body>
</html>
