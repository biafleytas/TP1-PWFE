import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Agenda} from "../../model/agenda";
import {ServiceagendaService} from "../../service/serviceagenda.service";
import {Paciente} from "../../model/paciente";

@Component({
  selector: 'app-agenda-modificar',
  templateUrl: './agenda-modificar.component.html',
  styleUrls: ['./agenda-modificar.component.css']
})
export class AgendaModificarComponent implements OnInit {

  agenda: Agenda = new Agenda();
  agendamod: Agenda = new Agenda();
  mensaje: string = "";
  sub: any;
  id: any;

  constructor(private servicioAgenda: ServiceagendaService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.agenda.idEmpleado = new Paciente();
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.servicioAgenda.getAgendas().subscribe(agendas => {
        this.agenda = agendas.lista.find((item: Agenda) => item.idPersonaHorarioAgenda == this.id) || new Agenda();
      });
    })};

  guardar(): void{
    this.agendamod.idPersonaHorarioAgenda = this.agenda.idPersonaHorarioAgenda;
    this.agendamod.dia = this.agenda.dia;
    this.agendamod.horaAperturaCadena = this.agenda.horaAperturaCadena;
    this.agendamod.horaCierreCadena = this.agenda.horaCierreCadena;
    this.agendamod.intervaloMinutos = this.agenda.intervaloMinutos;
    this.agendamod.idEmpleado = this.agenda.idEmpleado;
    this.servicioAgenda.modificarAgenda(this.agendamod).subscribe(
      () => {
        this.mensaje='Modificado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }
}

