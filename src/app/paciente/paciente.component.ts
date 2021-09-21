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
  nombre: string = "";
  apellido: string = "";
  paginas: number[] = [];

  constructor(private servicioPaciente: ServicepacienteService) { }

  ngOnInit(): void {
    this.traerItems(0);
  }

  deleteItem(p: number){
    this.servicioPaciente.deletePaciente(p)
      .subscribe(response => {
        this.pacientes = this.pacientes.filter(item => item.idPersona !== p);
      })
  }

  buscarNombre(): void{
    this.servicioPaciente.getPacienteNombre(this.nombre).subscribe(
      entity => this.pacientes = entity.lista,
      error =>console.log('no se pudieron conseguir las presentaciones')
    );
  }

  buscarApellido(): void{
    this.servicioPaciente.getPacienteApellido(this.apellido).subscribe(
      entity => this.pacientes = entity.lista,
      error =>console.log('no se pudieron conseguir las presentaciones')
    );
  }

  traerItems(numeroPagina: number){
    let inicio: number = (numeroPagina * 4);
    this.servicioPaciente.getPacientesPaginadas(inicio).subscribe(
      entity => {
        this.pacientes = entity.lista;
        let numeroPaginas: number = Math.ceil(entity.totalDatos / 4);
        this.paginas = Array.from(Array(numeroPaginas).keys());
      },
      error =>console.log('no se pudieron conseguir los pacientes')
    );
  }
}
