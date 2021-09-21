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
  empleado: string = "";
  dia: string = "";
  paginas: number[] = [];

  constructor(private servicioAgenda: ServiceagendaService) { }

  ngOnInit(): void {
    this.traerItems(0);
  }

  deleteItem(p: number){
    this.servicioAgenda.deleteAgenda(p)
      .subscribe(response => {
        this.agendas = this.agendas.filter(item => item.idPersonaHorarioAgenda !== p);
      })
  }

  traerItems(numeroPagina: number){
    let inicio: number = (numeroPagina * 4);
    this.servicioAgenda.getAgendasPaginadas(inicio).subscribe(
      entity => {
        this.agendas = entity.lista;
        let numeroPaginas: number = Math.ceil(entity.totalDatos / 4);
        this.paginas = Array.from(Array(numeroPaginas).keys());
      },
      error =>console.log('no se pudieron conseguir las agendas')
    );
  }

  buscar(): void{
    this.servicioAgenda.getAgendasFiltradas(this.empleado, this.dia).subscribe(
      entity => this.agendas = entity.lista,
      error =>console.log('no se pudieron conseguir las agendas')
    );
  }

}
