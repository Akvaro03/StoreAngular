import { CarritoService } from 'src/app/services/carrito.service';
import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { productModel } from 'src/app/Models/product';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() producto: any;

  productos : productModel = {
  "name": "Memoria Team DDR4 16GB (2x8GB) 3200MHz",
  "id": 17,
  "category": "memoria_soddimm",
  "precio": 11360,
  "foto": "./fotosProductos/memoriaSodimm2.png"
}
  url: string;
  constructor(public carrito:CarritoService) { 
    this.url = "assets/fotos/memoriaRam2.png"
  }

  ngOnInit(): void {
    this.productos = this.producto;
  //   botones.forEach(element => {
  //     element.addEventListener("click", (e) => {
  //         e.preventDefault();
  //         console.log(e.target);
  //     })
  // })
  
  }
  animation(){
    console.log(this.producto.id);
    // let button = document.querySelectorAll("buy");
    
    let boton = document.getElementById(this.producto.id)
    boton!.classList.remove('animate')
    setTimeout(() => boton!.classList.add('animate'), 100)
  
    console.log(boton);
    // boton.addEventListener("click", (e) => console.log(e));
  }
  agregarAlCarrito(){
    this.carrito.añadirAlCarrito(this.productos)
    // this.carrito.mostrarCarrito()
    // console.log(this.carrito.retornarCarrito());
  }


}
