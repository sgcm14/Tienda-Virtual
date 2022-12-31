import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICarrito } from '../app.interfaces';
import { Subscription } from 'rxjs';
import { IProduct, ISelectedProduct } from '../app.interfaces';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, OnDestroy {
  public carritos: ICarrito[] = [];
  userName = new FormControl('');
  userEmail =  new FormControl('');

  private igvvalue = 18;
  // Subscription to listen to the selected products
  selectedProductsObservable: Subscription;
  products: ISelectedProduct[] = [];

  processingPayment: boolean = false;

  constructor(
    public appService: AppService,
    private router: Router
  ) {
    this.selectedProductsObservable = this.appService.selectedProducts$.subscribe((products) => {
      console.log('⚡ ~ this.selectedProductsObservable=this.appService.selectedProducts$.subscribe ~ products', products);
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.appService.carrito$.subscribe((carritos) => {
      this.carritos = [...carritos];
    })
  }

  subTotal() {
    const sub = this.carritos.reduce((accum, act) => {
      return accum + (act.cantidad * act.price);
    }, 0);
    return (sub * (1 - (this.igvvalue / 100))).toFixed(2);
  }

  igv() {
    const sub = this.carritos.reduce((accum, act) => {
      return accum + (act.cantidad * act.price);
    }, 0);
    return (sub * (this.igvvalue / 100)).toFixed(2);
  }

  total() {
    const sub = this.carritos.reduce((accum, act) => {
      return accum + (act.cantidad * act.price);
    }, 0);
    return (sub).toFixed(2);
  }

  validarCorreo() {
    if (!this.userName.value || !this.userEmail.value) {
      return ;
    }

    const body = {
      list: [...this.carritos],
      userName: this.userName.value,
      userEmail: this.userEmail.value,
    };
    this.appService.postShop(body).subscribe((res) => {
      console.log('res', res);
      this.appService.carrito$.next([]);
      this.userEmail.setValue('');
      this.userName.setValue('');
      // this.router.navigate(['products']);
    });
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
