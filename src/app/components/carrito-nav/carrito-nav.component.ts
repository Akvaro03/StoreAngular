import { CarritoService } from 'src/app/services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/Models/product';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-carrito-nav',
  templateUrl: './carrito-nav.component.html',
  styleUrls: ['./carrito-nav.component.css']
})
export class CarritoNavComponent implements OnInit {
  productoIndividual:any = {};
  productosCarrito : Array<productModel> = []
  constructor(public carrito:CarritoService) { }

  ngOnInit(): void {
    this.carrito.retornarCarrito()
    // this.productosCarrito = "hola"
    this.carrito.productsBeha.subscribe((dato)=>{this.productosCarrito = dato})
    // fromEvent(document, 'keydown').subscribe((event: any) => {console.log(event);})

  }
}
