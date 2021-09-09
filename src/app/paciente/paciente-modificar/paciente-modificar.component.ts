import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/categoria";
import {ActivatedRoute} from "@angular/router";
import {Paciente} from "../../model/paciente";
import {ServicepacienteService} from "../../service/servicepaciente.service";

@Component({
  selector: 'app-paciente-modificar',
  templateUrl: './paciente-modificar.component.html',
  styleUrls: ['./paciente-modificar.component.css']
})
export class PacienteModificarComponent implements OnInit {

  paciente: Paciente = new Paciente();
  mensaje: string = "";
  sub: any;
  id: any;

  constructor(private servicioPaciente: ServicepacienteService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {

    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.servicioPaciente.getPacientes().subscribe(pacientes => {
        this.paciente = pacientes.lista.find((item: Paciente) => item.idPersona == this.id) || new Paciente();
      });
    })};

  guardar(): void{
    this.paciente.fechaNacimiento = this.paciente.fechaNacimiento + ' 00:00:00';
    this.servicioPaciente.modificarPaciente(this.paciente).subscribe(
      () => {
        this.mensaje='Modificado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }
}
