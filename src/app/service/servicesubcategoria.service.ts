import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {listadatos} from "../model/datos";
import {SubCategoria} from "../model/sub-categoria";
import {tap} from "rxjs/operators";
import {Paciente} from "../model/paciente";

@Injectable({
  providedIn: 'root'
})
export class ServicesubcategoriaService {

  private api: string ="http://181.123.243.5:8080/stock-pwfe/tipoProducto";

  constructor(private http: HttpClient) { }

  getSubCategorias(): Observable<listadatos<SubCategoria>> {
    return this.http.get<listadatos<SubCategoria>>(this.api);
  }

  getSubCategoriasDescripcion(descripcion: string): Observable<listadatos<SubCategoria>> {
    let ejemplo: any = {descripcion: descripcion};
    let ejemplo1: string = encodeURIComponent(JSON.stringify(ejemplo));
    return this.http.get<listadatos<SubCategoria>>(this.api+'?like=S&ejemplo='+ejemplo1);
  }

  getSubCategoriasCategoria(categoria: string): Observable<listadatos<SubCategoria>> {
    let ejemplo: any = {idCategoria: {idCategoria: categoria}};
    let ejemplo1: string = encodeURIComponent(JSON.stringify(ejemplo));
    return this.http.get<listadatos<SubCategoria>>(this.api+'?ejemplo='+ejemplo1);
  }

  getSubCategoriasPaginadas(inicio: number): Observable<listadatos<SubCategoria>> {
    return this.http.get<listadatos<SubCategoria>>(this.api+'?inicio='+inicio.toString()+'&cantidad=4');
  }

  agregarSubCategoria(p:SubCategoria): Observable<SubCategoria> {
    return this.http
      .post<SubCategoria>(this.api, p)
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }

  deleteSubCategoria(id: number){
    return this.http.delete(this.api+'/'+id);
  }

  modificarSubCategoria(p:SubCategoria): Observable<void> {
    return this.http
      .put<void>(this.api, p);
  }
}
