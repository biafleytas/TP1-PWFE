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
  sub: any;
  id: any;

  constructor(private servicioCategoria: ServicecategoriaService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {

    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.servicioCategoria.getCategorias().subscribe(categorias => {
        this.categoria = categorias.lista.find((item: Categoria) => item.idCategoria == this.id) || new Categoria();
      });
    })};

  guardar(): void{
    this.servicioCategoria.modificarCategoria(this.categoria).subscribe(
      () => {
        this.mensaje='Modificado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }
}
