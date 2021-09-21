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

  constructor(private servicioPresentacion: ServicepresentacionService) { }

  ngOnInit(): void {
    this.servicioPresentacion.getPresentaciones().subscribe(
      entity => this.presentaciones = entity.lista,
      error =>console.log('no se pudieron conseguir las presentaciones')
    );

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

}
