import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IProduct, ISelectedProduct } from './app.interfaces';

@Injectable({providedIn: 'root'})
export class AppService {
  configUrl = 'http://localhost:3000';
  products$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  filter$: BehaviorSubject<string> = new BehaviorSubject('');
  selectedProducts$: BehaviorSubject<ISelectedProduct[]> = new BehaviorSubject<ISelectedProduct[]>([]);

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.configUrl}/products`);
  }

  // getSelectedProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(`${this.configUrl}/products`);
  // }

  addSelectedProduct(product: ISelectedProduct) {
    // add selected products to the behavior subject
    this.selectedProducts$.next([...this.selectedProducts$.value, product]);
    // add to the local storage
    localStorage.setItem('selectedProducts', JSON.stringify([...this.selectedProducts$.value, product]));
  }

  set filter(value: string) {
    this.filter$.next(value);
  }

  getProductsObservable(): Observable<IProduct[]> {
    return this.products$.pipe(
      tap((products) => {
        if (!products.length) {
          this.getProducts().subscribe((products) => {
            this.products$.next(products);
          });
        }
      }),
    );
  }

}