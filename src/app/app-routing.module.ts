import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriaComponent} from "./categoria/categoria.component";
import {CategoriaAgregarComponent} from "./categoria/categoria-agregar/categoria-agregar.component";
import {SubCategoriaComponent} from "./sub-categoria/sub-categoria.component";
import {SubCategoriaAgregarComponent} from "./sub-categoria/sub-categoria-agregar/sub-categoria-agregar.component";
import {PacienteComponent} from "./paciente/paciente.component";
import {PacienteAgregarComponent} from "./paciente/paciente-agregar/paciente-agregar.component";
import {CategoriaModificarComponent} from "./categoria/categoria-modificar/categoria-modificar.component";
import {PacienteModificarComponent} from "./paciente/paciente-modificar/paciente-modificar.component";
import {SubCategoriaModificarComponent} from "./sub-categoria/sub-categoria-modificar/sub-categoria-modificar.component";

const routes: Routes = [
  {
  path:'categoria',
  component:CategoriaComponent
  },
  {
    path:'nuevacategoria',
    component:CategoriaAgregarComponent
  },
  {
    path:'modificarcategoria/:id',
    component:CategoriaModificarComponent
  },
  {
    path:'sub-categoria',
    component:SubCategoriaComponent
  },
  {
    path:'nuevasub-categoria',
    component: SubCategoriaAgregarComponent
  },
  {
    path:'modificarsubcategoria/:id',
    component:SubCategoriaModificarComponent
  },
  {
    path:'paciente',
    component:PacienteComponent
  },
  {
    path:'nuevopaciente',
    component:PacienteAgregarComponent
  },
  {
    path:'modificarpaciente/:id',
    component:PacienteModificarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
