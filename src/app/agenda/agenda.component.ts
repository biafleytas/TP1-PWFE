import { Component, OnInit } from '@angular/core';
import {Agenda} from "../model/agenda";
import {ServiceagendaService} from "../service/serviceagenda.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  agendas: Agenda[] = [];

  constructor(private servicioAgenda: ServiceagendaService) { }

  ngOnInit(): void {
    this.servicioAgenda.getAgendas().subscribe(
      entity => this.agendas = entity.lista,
      error =>console.log('no se pudieron conseguir las agendas')
    );

  }

  deleteItem(p: number){
    this.servicioAgenda.deleteAgenda(p)
      .subscribe(response => {
        this.agendas = this.agendas.filter(item => item.idPersonaHorarioAgenda !== p);
      })
  }

}
