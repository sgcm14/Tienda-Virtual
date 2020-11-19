class Carrito{
    //Añadir el producto al carrito
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement;
            this.leerDatosProducto(producto);
            //console.log(producto);
        }
    }

    leerDatosProducto(producto){
        const infoProducto ={
            imagen : producto.querySelector('img').src,
            titulo : producto.querySelector('h5').textContent,
            precio : producto.querySelector('.precio').textContent,
            id : producto.querySelector('a').getAttribute('data-id'),
            cantidad : 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id;
            }
        });
        if(productosLS === infoProducto.id){
            console.log('El producto ya está agregado');
            /* Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'El producto ya está agregado',
                timer: 1000,
                showConfirmButton: false
              }) */
        }
        else{
            this.insertarCarrito(infoProducto);
            //console.log(infoProducto);
        }
        
    }

    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
        <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
        <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }

    guardarProductosLocalStorage(producto){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
        let productoLS;
        if(localStorage.getItem('productos')===null){
            productoLS = [];
        }
        else{
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS, index){
            if(productoLS.id === productoID){
                productosLS.splice(index, 1);
            }
        });
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    leerLocalStorage(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row = document.createElement('tr');
            row.innerHTML= `
            <td>
            <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
            `;
            listaProductos.appendChild(row);
        });
    }

    vaciarLocalStorage(){
        localStorage.clear();
    }

    procesarPedido(e){
        e.preventDefault();
        if(this.obtenerProductosLocalStorage().length === 0){
            console.log('El carrito está vacío, agrega algún producto');
            /* Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El carrito está vacío, agrega algún producto',
                timer: 2000,
                showConfirmButton: false
              }) */
        }
        else{
            location.href="carrito.html";
        }
    }


}