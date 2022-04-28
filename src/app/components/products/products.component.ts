import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { productModel } from 'src/app/Models/product';

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
  constructor() { 
    this.url = "assets/fotos/memoriaRam2.png"
  }

  ngOnInit(): void {
    this.productos = this.producto;
  }

}
