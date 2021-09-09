import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/categoria";
import {ServicecategoriaService} from "../../service/servicecategoria.service";

@Component({
  selector: 'app-categoria-agregar',
  templateUrl: './categoria-agregar.component.html',
  styleUrls: ['./categoria-agregar.component.css']
})
export class CategoriaAgregarComponent implements OnInit {

  categoria: Categoria = new Categoria();
  mensaje: string = "";
  constructor(private servicioCategoria: ServicecategoriaService) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.servicioCategoria.agregarCategoria(this.categoria).subscribe(
      () => {
        this.mensaje='Agregado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }

}
