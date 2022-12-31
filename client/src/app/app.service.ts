import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ICarrito, IProduct } from './app.interfaces';

@Injectable({providedIn: 'root'})
export class AppService {
  configUrl = 'http://localhost:3000';
  products$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  filter$: BehaviorSubject<string> = new BehaviorSubject('');

  carrito$: BehaviorSubject<ICarrito[]> = new BehaviorSubject<ICarrito[]>([]);

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.configUrl}/products`);
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

  setCarrito(carrito: ICarrito) {
    this.carrito$.next([...this.carrito$.value, carrito]);
  }

  postShop(shop: any): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(`${this.configUrl}/products/shop`, shop, httpOptions);
  }


}