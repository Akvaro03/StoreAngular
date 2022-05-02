import { productModel } from 'src/app/Models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  public products: any = [];
  public productsBeha: BehaviorSubject<any> = new BehaviorSubject(this.products);
  // public observalbe : Observable<any> = this.products.asObservable();
  constructor() { }
  
  añadirAlCarrito(array:productModel){
    this.products.push(array);
    this.productsBeha.next(this.products)
    // console.log(this.products);
    // let observador = Observable.create()
  }
  mostrarCarrito(){
    console.clear()
    this.products.forEach((producto:productModel) => console.log(producto))
  }
  retornarCarrito(){
    this.productsBeha.subscribe(console.log);

    return this.products
  }

}
