import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Aula } from '../models/aula';
import { ReservaImpl } from '../models/reserva-impl';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';
import { ReservaService } from '../service/reserva.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styles: []
})
export class AulasComponent implements OnInit {

  aulaVerDatos: Aula;
  public aulas: Aula[] = [];
  public aula: Aula;
  public usuarios: Usuario[] = [];
  public reserva : ReservaImpl = new ReservaImpl();
  public usuario : UsuarioImpl = new UsuarioImpl();

constructor(private reservaService: ReservaService) { }

ngOnInit() {
  console.log("hola")
  this.reservaService.getUsuarios().subscribe(response => 
  this.usuarios= this.reservaService.mapearUsuarios(response));   
  this.reservaService.getAulas().subscribe(response =>
  this.aulas = this.reservaService.mapearAulas(response));
}

verDatos(aula: Aula): void {
  this.aulaVerDatos = aula;
}
onCambio(){
    
      this.reserva.fechaInicio = moment.utc(this.reserva.fechaInicio).format();
      this.reserva.fechaFin = moment.utc(this.reserva.fechaFin).format();
      this.reserva.activo = `${environment.hostControladores}aulas/${this.aulaVerDatos.id}`; 
      this.reserva.usuario = `${environment.hostControladores}usuario/${this.usuario.id}`
      this.reservaService.postReserva(this.reserva).subscribe((response) =>console.log(response));
  
}
}
