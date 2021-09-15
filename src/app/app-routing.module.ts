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
import {AgendaComponent} from "./agenda/agenda.component";
import {AgendaAgregarComponent} from "./agenda/agenda-agregar/agenda-agregar.component";
import {AgendaModificarComponent} from "./agenda/agenda-modificar/agenda-modificar.component";
import {PresentacionComponent} from "./presentacion/presentacion.component";
import {PresentacionAgregarComponent} from "./presentacion/presentacion-agregar/presentacion-agregar.component";
import {PresentacionModificarComponent} from "./presentacion/presentacion-modificar/presentacion-modificar.component";

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
  },
  {
    path:'agenda',
    component:AgendaComponent
  },
  {
    path:'nuevaagenda',
    component:AgendaAgregarComponent
  },
  {
    path:'modificaragenda/:id',
    component:AgendaModificarComponent
  },
  {
    path:'presentacion',
    component:PresentacionComponent
  },
  {
    path:'nuevapresentacion',
    component:PresentacionAgregarComponent
  },
  {
    path:'modificarpresentacion/:id',
    component:PresentacionModificarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
