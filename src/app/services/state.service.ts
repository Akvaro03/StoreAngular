import { Injectable } from '@angular/core';
import { productModel } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  products: Object = [];

  constructor() { }
  setValor(producto:productModel) {
    this.products = producto;
  }
  getValor(){
    return this.products
  }

}
