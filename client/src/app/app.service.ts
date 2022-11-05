import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IProduct } from './app.interfaces';

@Injectable({providedIn: 'root'})
export class AppService {
  configUrl = 'http://localhost:3000';
  products$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  filter$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.configUrl}/products`);
  }

  set filter(value: string) {
    this.filter$.next(value);
  }

  getProductsObservable() {
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