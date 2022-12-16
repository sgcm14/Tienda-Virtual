import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct, ISelectedProduct } from '../app.interfaces';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  productsObservable: Subscription;
  filter: string = '';

  constructor(private appService: AppService) {
    this.productsObservable = this.appService.getProductsObservable().subscribe((products) => {
      console.log('⚡ ~ this.productsObservable=this.appService.getProductsObservable ~ products', products);
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.appService.filter$.subscribe((filter) => {
      this.filter = filter;
      console.log('⚡ ~ this.appService.filter$.subscribe ~ this.filter', this.filter);
    });
  }

  ngOnDestroy(): void {
    this.productsObservable.unsubscribe();
  }

  addProduct(product: IProduct) {
    this.appService.addSelectedProduct({
      ...product,
      quantity: 1,
      total: product.price * 1
    } as ISelectedProduct);
  }
}
