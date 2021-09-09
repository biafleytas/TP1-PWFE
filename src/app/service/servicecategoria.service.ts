import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {listadatos} from "../model/datos";
import {Categoria} from "../model/categoria";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicecategoriaService {
  private api: string ="http://181.123.243.5:8080/stock-pwfe/categoria";

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<listadatos<Categoria>> {
    return this.http.get<listadatos<Categoria>>(this.api);
  }

  agregarCategoria(p:Categoria): Observable<Categoria> {
    return this.http
      .post<Categoria>(this.api, p)
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }

  deleteCategoria(id: number){
    return this.http.delete(this.api+'/'+id);
  }

  modificarCategoria(p:Categoria): Observable<void> {
    return this.http
      .put<void>(this.api, p);
  }
}
