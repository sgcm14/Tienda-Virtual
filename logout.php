<?php
session_start(); // Iniciar la sesión

// Destruir todas las variables de sesión
$_SESSION = array(); // Limpia todas las variables de sesión

// Si se desea eliminar también la cookie de sesión
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"], $params["secure"], $params["httponly"]
    );
}

// Finalmente, destruir la sesión
session_destroy(); // Destruye la sesión completamente

// Redirigir al usuario a la página de inicio de sesión
header("Location: login.html");
exit();
?>

