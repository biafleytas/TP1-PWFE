import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Presentacion} from "../../model/presentacion";
import {ServicepresentacionService} from "../../service/servicepresentacion.service";

@Component({
  selector: 'app-presentacion-modificar',
  templateUrl: './presentacion-modificar.component.html',
  styleUrls: ['./presentacion-modificar.component.css']
})
export class PresentacionModificarComponent implements OnInit {

  presentacion: Presentacion = new Presentacion();
  presentacionmod: Presentacion = new Presentacion();
  mensaje: string = "";
  sub: any;
  id: any;

  constructor(private servicioPresentacion: ServicepresentacionService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.servicioPresentacion.getPresentaciones().subscribe(presentaciones => {
        this.presentacion = presentaciones.lista.find((item: Presentacion) => item.idPresentacionProducto == this.id) || new Presentacion();
      });
    })};

  guardar(): void{
    console.log(this.presentacionmod)
    this.presentacionmod.idPresentacionProducto = this.presentacion.idPresentacionProducto;
    this.presentacionmod.codigo = this.presentacion.codigo;
    this.presentacionmod.flagServicio = this.presentacion.flagServicio;
    this.presentacionmod.idProducto = this.presentacion.idProducto;
    this.presentacionmod.nombre = this.presentacion.nombre;
    this.presentacionmod.existenciaProducto = this.presentacion.existenciaProducto;
    this.servicioPresentacion.modificarPresentacion(this.presentacionmod).subscribe(
      () => {
        this.mensaje='Modificado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }
}

