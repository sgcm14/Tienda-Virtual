import { Injectable } from '@nestjs/common';
import { IProduct } from './products/products.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): IProduct[] {
    const products = [
      {
        image: 'assets/img/ropa1.jpeg',
        name: 'Ropa Hello Kitty',
        sku: 'ROP0000074',
        price: 18,
        id: 1,
      },
      {
        image: 'assets/img/juguete1.png',
        name: 'Pelota Soga Nudo Grande Colores',
        sku: 'JUG0000005',
        price: 14,
        id: 2,
      },
      {
        image: 'assets/img/alimento1.webp',
        name: 'Pack Yogy Helado para perros 100% Natural 100g de Barker',
        sku: 'BPY4UND',
        price: 24,
        id: 3,
      },
      {
        image: 'assets/img/alimento2.webp',
        name: 'Dingo Dental Mini Bones 7und x70gr',
        sku: 'DDMB7U70GR',
        price: 26,
        id: 4,
      },
      {
        image: 'assets/img/juguete3.webp',
        name: 'Hartz - Duraplay Ball Medium',
        sku: 'HDB04',
        price: 35,
        id: 5,
      },
      {
        image: 'assets/img/ropa2.jpeg',
        name: 'Ropa Avengers',
        sku: 'ROP0000023',
        price: 21,
        id: 6,
      },
      {
        image: 'assets/img/juguete2.webp',
        name: 'Animal Planet Juguete P/Mascota Medium',
        sku: 'AP-D794-011',
        price: 29,
        id: 7,
      },
      {
        image: 'assets/img/ropa3.webp',
        name: 'Hoodie Hotdogz Mr. Charlie',
        sku: 'HTD-TSH023-1',
        price: 90,
        id: 8,
      },
      {
        image: 'assets/img/alimento3.webp',
        name: 'Hills PD Metabolic Treats',
        sku: 'HPDMT',
        price: 45,
        id: 9,
      },
    ];
    return products;
  }
}
