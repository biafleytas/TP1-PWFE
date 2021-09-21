import { Component, OnInit } from '@angular/core';
import {Categoria} from "../model/categoria";
import {ServicecategoriaService} from "../service/servicecategoria.service";
import {range} from "rxjs";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  paginas: number[] = [];

  constructor(private servicioCategoria: ServicecategoriaService) { }

  ngOnInit(): void {
    this.traerItems(0);
  }

  deleteItem(p: number){
    this.servicioCategoria.deleteCategoria(p)
      .subscribe(response => {
        this.categorias = this.categorias.filter(item => item.idCategoria !== p);
      })
  }

  traerItems(numeroPagina: number){
    let inicio: number = (numeroPagina * 4);
    this.servicioCategoria.getCategoriasPaginadas(inicio).subscribe(
      entity => {
        this.categorias = entity.lista;
        let numeroPaginas: number = Math.ceil(entity.totalDatos / 4);
        this.paginas = Array.from(Array(numeroPaginas).keys());
      },
      error =>console.log('no se pudieron conseguir las categorias')
    );
  }

}
