import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/categoria";
import {ServicecategoriaService} from "../../service/servicecategoria.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categoria-modificar',
  templateUrl: './categoria-modificar.component.html',
  styleUrls: ['./categoria-modificar.component.css']
})
export class CategoriaModificarComponent implements OnInit {

  categoria: Categoria = new Categoria();
  mensaje: string = "";
  constructor(private servicioCategoria: ServicecategoriaService) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.servicioCategoria.modificarCategoria(this.categoria).subscribe(
      () => {
        this.mensaje='Modificado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }
}
