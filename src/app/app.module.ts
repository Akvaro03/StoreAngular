import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BodyComponent } from './components/body/body.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdenarComponent } from './components/ordenar/ordenar.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    PrincipalComponent,
    SideBarComponent,
    ProductsComponent,
    OrdenarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
