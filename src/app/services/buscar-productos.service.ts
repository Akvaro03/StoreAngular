import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarProductosService {

  constructor(private http:HttpClient) { }

  buscarProductos(){
    const url = "assets/products/datos.json"
    // const url = "https://reqres.in/api/users"
    return this.http.get(url)
  }
}
