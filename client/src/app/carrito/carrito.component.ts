import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct, ISelectedProduct } from '../app.interfaces';
import { AppService } from '../app.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, OnDestroy {

  // Subscription to listen to the selected products
  selectedProductsObservable: Subscription;
  products: ISelectedProduct[] = [];

  processingPayment: boolean = false;

  constructor(
    public appService: AppService
  ) {
    this.selectedProductsObservable = this.appService.selectedProducts$.subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.selectedProductsObservable.unsubscribe();
  }

  getSubtotal(): number {
    return this.products.reduce((acc, product) => acc + product.total, 0);
  }

  getIGV(): number {
    return this.getSubtotal() * 0.18;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getIGV();
  }

  eraseProduct(productId: number) {
    this.appService.selectedProducts$.next(this.products.filter((product) => product.id !== productId));
  }

  realizarCompra() {
    this.processingPayment = true;
    setTimeout(() => {
      this.processingPayment = false;
      this.appService.selectedProducts$.next([]);
    }, 2000);
  }

}
