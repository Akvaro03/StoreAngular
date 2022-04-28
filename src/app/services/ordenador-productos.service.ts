import { Injectable } from '@angular/core';
import { isEmpty } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class OrdenadorProductosService {
  productos : object = [];
  cont : number = 0;
  // intento:any;
  constructor(public store:StateService) {
  }

  ordenar(){ 
    this.productos = this.store.getValor()
  }
}
