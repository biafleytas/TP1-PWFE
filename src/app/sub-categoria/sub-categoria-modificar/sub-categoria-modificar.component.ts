import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/categoria";
import {ServicecategoriaService} from "../../service/servicecategoria.service";
import {ActivatedRoute} from "@angular/router";
import {SubCategoria} from "../../model/sub-categoria";
import {ServicesubcategoriaService} from "../../service/servicesubcategoria.service";

@Component({
  selector: 'app-sub-categoria-modificar',
  templateUrl: './sub-categoria-modificar.component.html',
  styleUrls: ['./sub-categoria-modificar.component.css']
})
export class SubCategoriaModificarComponent implements OnInit {

  subcategoria: SubCategoria = new SubCategoria();
  mensaje: string = "";
  sub: any;
  id: any;

  constructor(private servicioSubCategoria: ServicesubcategoriaService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.subcategoria.idCategoria = new Categoria();
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.servicioSubCategoria.getSubCategorias().subscribe(subcategorias => {
        this.subcategoria = subcategorias.lista.find((item: SubCategoria) => item.idTipoProducto == this.id) || new SubCategoria();
      });
    })};

  guardar(): void{
    this.servicioSubCategoria.modificarSubCategoria(this.subcategoria).subscribe(
      () => {
        this.mensaje='Modificado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }
}
