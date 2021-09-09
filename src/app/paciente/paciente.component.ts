import { Component, OnInit } from '@angular/core';
import {Paciente} from "../model/paciente";
import {ServicepacienteService} from "../service/servicepaciente.service";


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private servicioPaciente: ServicepacienteService) { }

  ngOnInit(): void {
    this.servicioPaciente.getPacientes().subscribe(
      entity => this.pacientes = entity.lista,
      error =>console.log('no se pudieron conseguir los pacientes')
    );
  }

  deleteItem(p: number){
    this.servicioPaciente.deletePaciente(p)
      .subscribe(response => {
        this.pacientes = this.pacientes.filter(item => item.idPersona !== p);
      })
  }

}
