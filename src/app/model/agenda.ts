import {Paciente} from "./paciente";

export class Agenda {
  idPersonaHorarioAgenda!: number;
  dia!: number;
  horaAperturaCadena!: string;
  horaCierreCadena!: string;
  intervaloMinutos!: number;
  idEmpleado!: Paciente;
}
