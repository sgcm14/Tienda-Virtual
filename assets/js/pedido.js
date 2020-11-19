const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}