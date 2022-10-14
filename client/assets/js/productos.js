const container = document.getElementById('lista-productos');
console.log('⚡ ~ container', container);


const getProductCard = (product) => {
  return `
    <div class="card">
      <img src="${product.image}" class="card-img">
      <h5>${product.name}</h5>
      <p>SKU: ${product.sku}</p>
      <p>S/.<small class="precio">${product.price}</small></p>
      <a href="#" class="button agregar-carrito" data-id="${product.id}">Comprar</a>
    </div>
  `
}

const renderProducts = async () => {
  const productList = await getProducts();
  productList.forEach(product => {
    container.innerHTML += getProductCard(product);
  });
}

const getProducts = async () => {
  const response = await fetch('http://localhost:3000/products');
  const data = await response.json();
  return data.data;
}

renderProducts();