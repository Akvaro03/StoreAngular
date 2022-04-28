import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { BuscarProductosService } from 'src/app/services/buscar-productos.service';
import { OrdenadorProductosService } from 'src/app/services/ordenador-productos.service';
import { productModel } from 'src/app/Models/product';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  productos: any;
  category :any = ""
  base:any = [];
  datos:any = [];



  constructor(public service:BuscarProductosService,public ordenador:OrdenadorProductosService, public store:StateService) { 
    this.productos = []
  }
  ngOnInit(): void {
    this.service.buscarProductos().subscribe((data:any) => {
      this.store.setValor(data)
      this.ordenador.ordenar();
      data.forEach((element:any) => {
        this.productos.push(element);
      });
    })
  }

}
