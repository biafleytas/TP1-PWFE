import { Component, OnInit } from '@angular/core';
import {Presentacion} from "../model/presentacion";
import {ServicepresentacionService} from "../service/servicepresentacion.service";

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  presentaciones: Presentacion[] = [];
  nombre: string = "";
  subcategoria: string = "";
  paginas: number[] = [];

  constructor(private servicioPresentacion: ServicepresentacionService) { }

  ngOnInit(): void {
    this.traerItems(0);
  }

  deleteItem(p: number){
    this.servicioPresentacion.deletePresentacion(p)
      .subscribe(response => {
        this.presentaciones = this.presentaciones.filter(item => item.idPresentacionProducto !== p);
      })
  }

  buscarNombre(): void{
    this.servicioPresentacion.getPresentacionNombre(this.nombre).subscribe(
      entity => this.presentaciones = entity.lista,
      error =>console.log('no se pudieron conseguir las presentaciones')
    );
  }

  buscarSubCategoria(): void{
    this.servicioPresentacion.getPresentacionSubCategoria(this.subcategoria).subscribe(
      entity => this.presentaciones = entity.lista,
      error =>console.log('no se pudieron conseguir las sub-categorias')
    );
  }

  traerItems(numeroPagina: number){
    let inicio: number = (numeroPagina * 4);
    this.servicioPresentacion.getPresentacionesPaginadas(inicio).subscribe(
      entity => {
        this.presentaciones = entity.lista;
        let numeroPaginas: number = Math.ceil(entity.totalDatos / 4);
        this.paginas = Array.from(Array(numeroPaginas).keys());
      },
      error =>console.log('no se pudieron conseguir las presentaciones')
    );
  }

}
