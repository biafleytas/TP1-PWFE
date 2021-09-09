import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {listadatos} from "../model/datos";
import {SubCategoria} from "../model/sub-categoria";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicesubcategoriaService {

  private api: string ="http://181.123.243.5:8080/stock-pwfe/tipoProducto";

  constructor(private http: HttpClient) { }

  getSubCategorias(): Observable<listadatos<SubCategoria>> {
    return this.http.get<listadatos<SubCategoria>>(this.api);
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
