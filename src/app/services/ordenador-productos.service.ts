import { Injectable } from '@angular/core';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenadorProductosService {
  productos : any = [];
  cont : number = 0;
  // intento:any;
  constructor() { }

  setArray(array: any) {
    
    if (Object.keys(array).length === 0) {
      console.log("esta vacio");
    } else {
      this.productos = array;
    }

    console.log("termina");
    this.ordenar()
  }
    
  ordenar(){ 
    console.log(this.productos)
  }
}
