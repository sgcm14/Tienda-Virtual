export interface IProduct {
  image: string;
  name: string;
  sku: string;
  price: number;
  id: number;
}

export interface ICarrito {
  image: string;
  name: string;
  sku: string;
  price: number;
  id: number;
  cantidad: number;
}

export interface ISelectedProduct {
    image: string;
    name: string;
    sku: string;
    price: number;
    id: number;
    quantity: number;
    total: number;
}
