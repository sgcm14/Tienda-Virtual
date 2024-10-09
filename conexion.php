<?php

$server ="localhost";
$user ="root";
$pass ="";
$db ="mestel_bd";

// Crear la conexión
$conexion = new mysqli($server, $user, $pass, $db);

// Verificar la conexión
if ($conexion->connect_errno) {
    die("Conexión fallida: " . $conexion->connect_errno);
} else {
    // Puedes dejar esta línea comentada si no quieres que se imprima en cada archivo
   //  echo "Conexión correcta";
}
    
?>
