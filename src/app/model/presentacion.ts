import {Producto} from "./producto";
import {Existencia} from "./existencia";

export class Presentacion {
  idPresentacionProducto!: number;
  nombre!: string;
  codigo!: number;
  flagServicio!: string;
  descripcion!: string;
  idProducto!: Producto;
  existenciaProducto!: Existencia;
}
