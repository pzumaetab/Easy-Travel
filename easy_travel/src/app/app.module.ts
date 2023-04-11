import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EmpresaTransporteComponent } from './component/empresa-transporte/empresa-transporte.component';
import { EmpresaTransporteListarComponent } from './component/empresa-transporte/empresa-transporte-listar/empresa-transporte-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table'
@NgModule({
  declarations: [
    AppComponent,
    EmpresaTransporteComponent,
    EmpresaTransporteListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
