import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {listadatos} from "../model/datos";
import {tap} from "rxjs/operators";
import {Agenda} from "../model/agenda";

@Injectable({
  providedIn: 'root'
})
export class ServiceagendaService {

  private api: string ="http://181.123.243.5:8080/stock-pwfe/personaHorarioAgenda";

  constructor(private http: HttpClient) { }

  getAgendas(): Observable<listadatos<Agenda>> {
    return this.http.get<listadatos<Agenda>>(this.api);
  }

  agregarAgenda(p:Agenda): Observable<Agenda> {
    const headers = new HttpHeaders().set('usuario','usuario2');
    return this.http
      .post<Agenda>(this.api, p, { 'headers': headers })
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }

  deleteAgenda(id: number){
    return this.http.delete(this.api+'/'+id);
  }

  modificarAgenda(p:Agenda): Observable<void> {
    const headers = new HttpHeaders().set('usuario','usuario2');
    return this.http
      .put<void>(this.api, p, { 'headers': headers });
  }
}
