import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {listadatos} from "../model/datos";
import {SubCategoria} from "../model/sub-categoria";
import {tap} from "rxjs/operators";
import {Presentacion} from "../model/presentacion";

@Injectable({
  providedIn: 'root'
})
export class ServicepresentacionService {

  private api: string = "http://181.123.243.5:8080/stock-pwfe/presentacionProducto";

  constructor(private http: HttpClient) {
  }

  getPresentaciones(): Observable<listadatos<Presentacion>> {
    return this.http.get<listadatos<Presentacion>>(this.api);
  }

  agregarPresentacion(p: Presentacion): Observable<Presentacion> {
    return this.http
      .post<Presentacion>(this.api, p)
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado ' + data),
          error => console.log("error: " + error)
        )
      );
  }

  deletePresentacion(id: number) {
    return this.http.delete(this.api + '/' + id);
  }

  modificarPresentacion(p: Presentacion): Observable<void> {
    return this.http
      .put<void>(this.api, p);
  }

}
