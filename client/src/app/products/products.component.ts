import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICarrito, IProduct } from '../app.interfaces';
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
    this.productsObservable = this.appService.getProductsObservable()
      .subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.appService.filter$.subscribe((filter) => {
      this.filter = filter;
    });
  }

  ngOnDestroy(): void {
    this.productsObservable.unsubscribe();
  }

  agregar(product: IProduct) {
    this.appService.setCarrito({ ...product, cantidad: 1 });
  }
}
