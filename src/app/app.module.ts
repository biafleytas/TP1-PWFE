import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import {HttpClientModule} from "@angular/common/http";
import {ServicecategoriaService} from "./service/servicecategoria.service";
import { CategoriaAgregarComponent } from './categoria/categoria-agregar/categoria-agregar.component';
import {FormsModule} from "@angular/forms";
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import {ServicesubcategoriaService} from "./service/servicesubcategoria.service";
import { SubCategoriaAgregarComponent } from './sub-categoria/sub-categoria-agregar/sub-categoria-agregar.component';
import { PacienteComponent } from './paciente/paciente.component';
import {ServicepacienteService} from "./service/servicepaciente.service";
import { PacienteAgregarComponent } from './paciente/paciente-agregar/paciente-agregar.component';
import { CategoriaModificarComponent } from './categoria/categoria-modificar/categoria-modificar.component';
import { SubCategoriaModificarComponent } from './sub-categoria/sub-categoria-modificar/sub-categoria-modificar.component';
import { PacienteModificarComponent } from './paciente/paciente-modificar/paciente-modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CategoriaAgregarComponent,
    SubCategoriaComponent,
    SubCategoriaAgregarComponent,
    PacienteComponent,
    PacienteAgregarComponent,
    CategoriaModificarComponent,
    SubCategoriaModificarComponent,
    PacienteModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServicecategoriaService,
    ServicesubcategoriaService,
    ServicepacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
