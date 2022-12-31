import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICarrito } from '../app.interfaces';
import { AppService } from '../app.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  public carritos: ICarrito[] = [];
  userName = new FormControl('');
  userEmail =  new FormControl('');

  private igvvalue = 18;
  constructor(
    private appService: AppService
  ) { }

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
    this.appService.postShop({
      list: [...this.carritos],
      userName: this.userName.value,
      userEmail: this.userEmail.value,
    }).subscribe((res) => {
      this.appService.carrito$.next([]);
      this.userEmail.setValue('');
      this.userName.setValue('');
    });
  }

}
