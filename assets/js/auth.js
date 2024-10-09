// Verificar si hay un usuario logueado
const username = sessionStorage.getItem('username');

if (username) {
  // Si el usuario está logueado, mostrar su nombre
  document.getElementById('userLogin').innerHTML = `
    <span>Bienvenido, ${username}</span> 
    <a href="#" id="logoutBtn">(Cerrar sesión)</a>
  `;

  // Manejar el cierre de sesión
  document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('username');
    window.location.href = 'login.html';
  });
} else {
  // Si no está logueado, mostrar el ícono de login
  document.getElementById('userLogin').innerHTML = `
    <a href="login.html">
      <i class="fas fa-sign-in-alt"></i> Login
    </a>
  `;
}