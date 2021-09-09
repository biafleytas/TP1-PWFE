import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../model/paciente";
import {ServicepacienteService} from "../../service/servicepaciente.service";

@Component({
  selector: 'app-paciente-agregar',
  templateUrl: './paciente-agregar.component.html',
  styleUrls: ['./paciente-agregar.component.css']
})
export class PacienteAgregarComponent implements OnInit {

  paciente: Paciente = new Paciente();
  mensaje: string = "";
  constructor(private servicioPaciente: ServicepacienteService) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.paciente.fechaNacimiento = this.paciente.fechaNacimiento + ' 00:00:00';
    this.servicioPaciente.agregarPaciente(this.paciente).subscribe(
      () => {
        this.mensaje='Agregado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }

}
