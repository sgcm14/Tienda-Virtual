<?php
// Incluir la conexión
include 'conexion.php';

// Realizar consultas a la base de datos
$sql = "SELECT * FROM usuarios";
$result = $conexion->query($sql);

if ($result->num_rows > 0) {
    // Iterar a través de los resultados y mostrar los datos
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Usuario: " . $row["usuario"] . "<br>";
    }
} else {
    echo "No hay resultados";
}

// Cerrar la conexión
$conexion->close();
?>
