import { Component, OnInit } from '@angular/core';
import {Categoria} from "../model/categoria";
import {ServicecategoriaService} from "../service/servicecategoria.service";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private servicioCategoria: ServicecategoriaService) { }

  ngOnInit(): void {
    this.servicioCategoria.getCategorias().subscribe(
      entity => this.categorias = entity.lista,
      error =>console.log('no se pudieron conseguir las categorias')
    );
  }

  deleteItem(p: number){
    this.servicioCategoria.deleteCategoria(p)
      .subscribe(response => {
        this.categorias = this.categorias.filter(item => item.idCategoria !== p);
      })
  }

}
