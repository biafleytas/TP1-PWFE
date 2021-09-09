import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {listadatos} from "../model/datos";
import {Paciente} from "../model/paciente";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ServicepacienteService {
  private api: string ="http://181.123.243.5:8080/stock-pwfe/persona";

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<listadatos<Paciente>> {
    return this.http.get<listadatos<Paciente>>(this.api);
  }

  agregarPaciente(p:Paciente): Observable<Paciente> {
    return this.http
      .post<Paciente>(this.api, p)
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }

  deletePaciente(id: number){
    return this.http.delete(this.api+'/'+id);
  }

  modificarPaciente(p:Paciente): Observable<void> {
    return this.http
      .put<void>(this.api, p);
  }
}
