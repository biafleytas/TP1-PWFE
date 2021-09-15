import { Component, OnInit } from '@angular/core';
import {Presentacion} from "../../model/presentacion";
import {ServicepresentacionService} from "../../service/servicepresentacion.service";
import {Producto} from "../../model/producto";
import {Existencia} from "../../model/existencia";

@Component({
  selector: 'app-presentacion-agregar',
  templateUrl: './presentacion-agregar.component.html',
  styleUrls: ['./presentacion-agregar.component.css']
})
export class PresentacionAgregarComponent implements OnInit {

  presentacion: Presentacion = new Presentacion();
  mensaje: string = "";
  constructor(private servicioPresentacion: ServicepresentacionService) { }

  ngOnInit(): void {
    this.presentacion.idProducto = new Producto();
    this.presentacion.existenciaProducto = new Existencia();
  }

  guardar(): void{
    console.log(this.presentacion)
    this.servicioPresentacion.agregarPresentacion(this.presentacion).subscribe(
      () => {
        this.mensaje='Agregado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }

}
