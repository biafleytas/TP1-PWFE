import { Component, OnInit } from '@angular/core';
import {Agenda} from "../../model/agenda";
import {ServiceagendaService} from "../../service/serviceagenda.service";
import {Paciente} from "../../model/paciente";

@Component({
  selector: 'app-agenda-agregar',
  templateUrl: './agenda-agregar.component.html',
  styleUrls: ['./agenda-agregar.component.css']
})
export class AgendaAgregarComponent implements OnInit {

  agenda: Agenda = new Agenda();
  mensaje: string = "";
  constructor(private servicioAgenda: ServiceagendaService) { }

  ngOnInit(): void {
    this.agenda.idEmpleado = new Paciente();
  }

  guardar(): void{
    this.servicioAgenda.agregarAgenda(this.agenda).subscribe(
      () => {
        this.mensaje='Agregado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }

}
