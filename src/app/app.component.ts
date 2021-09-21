import { Component } from '@angular/core';
import {ServicepacienteService} from "./service/servicepaciente.service";
import {Paciente} from "./model/paciente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrabajoPractico1';
  paciente: Paciente = new Paciente();
  login: boolean = true;
  usuario: Paciente [] = [];
  mensaje: string = "";

  constructor(private servicioPaciente: ServicepacienteService) {  }

  verificar(): void{
    this.servicioPaciente.getUsuariosDelSistema().subscribe(
      entity => {
        this.usuario = entity.lista.filter(item => item.usuarioLogin == this.paciente.usuarioLogin);
        if (this.usuario.length > 0)
        {
          this.login = false;
          localStorage.setItem("usuario", this.paciente.usuarioLogin);
        } else{
          this.mensaje= "Usuario incorrecto";
        }
      },
      error => console.log("error: "+error)
    );
  }
}
