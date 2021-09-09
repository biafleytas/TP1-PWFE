import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/categoria";
import {ServicecategoriaService} from "../../service/servicecategoria.service";
import {SubCategoria} from "../../model/sub-categoria";
import {ServicesubcategoriaService} from "../../service/servicesubcategoria.service";

@Component({
  selector: 'app-sub-categoria-agregar',
  templateUrl: './sub-categoria-agregar.component.html',
  styleUrls: ['./sub-categoria-agregar.component.css']
})
export class SubCategoriaAgregarComponent implements OnInit {

  subcategoria: SubCategoria = new SubCategoria();
  mensaje: string = "";
  constructor(private servicioSubCategoria: ServicesubcategoriaService) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.servicioSubCategoria.agregarSubCategoria(this.subcategoria).subscribe(
      () => {
        this.mensaje='Agregado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }

}
