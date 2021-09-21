import { Component, OnInit } from '@angular/core';
import {SubCategoria} from "../model/sub-categoria";
import {ServicecategoriaService} from "../service/servicecategoria.service";
import {ServicesubcategoriaService} from "../service/servicesubcategoria.service";

@Component({
  selector: 'app-sub-categoria',
  templateUrl: './sub-categoria.component.html',
  styleUrls: ['./sub-categoria.component.css']
})
export class SubCategoriaComponent implements OnInit {
  subCategorias: SubCategoria[] = [];
  descripcion: string = "";
  categoria: string = "";
  paginas: number[] = [];

  constructor(private servicioSubCategoria: ServicesubcategoriaService) { }

  ngOnInit(): void {
    this.traerItems(0);
  }

  deleteItem(p: number){
    this.servicioSubCategoria.deleteSubCategoria(p)
      .subscribe(response => {
        this.subCategorias = this.subCategorias.filter(item => item.idTipoProducto !== p);
      })
  }

  buscarDescripcion(): void{
    this.servicioSubCategoria.getSubCategoriasDescripcion(this.descripcion).subscribe(
      entity => this.subCategorias = entity.lista,
      error =>console.log('no se pudieron conseguir las sub-categorias')
    );
  }

  buscarCategoria(): void{
    this.servicioSubCategoria.getSubCategoriasCategoria(this.categoria).subscribe(
      entity => this.subCategorias = entity.lista,
      error =>console.log('no se pudieron conseguir las sub-categorias')
    );
  }

  traerItems(numeroPagina: number){
    let inicio: number = (numeroPagina * 4);
    this.servicioSubCategoria.getSubCategoriasPaginadas(inicio).subscribe(
      entity => {
        this.subCategorias = entity.lista;
        let numeroPaginas: number = Math.ceil(entity.totalDatos / 4);
        this.paginas = Array.from(Array(numeroPaginas).keys());
      },
      error =>console.log('no se pudieron conseguir las sub-categorias')
    );
  }

}
