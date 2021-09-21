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

  constructor(private servicioSubCategoria: ServicesubcategoriaService) { }

  ngOnInit(): void {
    this.servicioSubCategoria.getSubCategorias().subscribe(
      entity => this.subCategorias = entity.lista,
      error =>console.log('no se pudieron conseguir las sub-categorias')
    );

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

}
