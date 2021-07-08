import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import * as moment from 'moment';
import { Aula } from '../models/aula';
import { ReservaImpl } from '../models/reserva-impl';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';
import { ReservaService } from '../service/reserva.service';


@Component({
  selector: 'app-reservaulas',
  templateUrl: './reservaulas.component.html',
  styles: []
})
export class ReservaulasComponent implements OnInit {

  public reserva : ReservaImpl = new ReservaImpl();
  public usuario : UsuarioImpl = new UsuarioImpl();
  public usuarios: Usuario[] = [];
  public aulas: Aula[] = [];
  public control: boolean = false;
  indices : number [];
  asistentes: number;
  proyector: boolean = true;
  observable$;
  observable;
  constructor(private reservaService: ReservaService,
    private router: Router) { }

  ngOnInit() {
    this.reservaService.getUsuarios().subscribe(response => 
    this.usuarios = this.reservaService.mapearUsuarios(response));   
    console.log(this.usuarios)
  }
  
onCambio(){


   this.reserva.fechaInicio = moment.utc(this.reserva.fechaInicio).format();
   this.reserva.fechaInicio = this.reserva.fechaInicio.substring(0, this.reserva.fechaInicio.length -1);
   this.reserva.fechaFin = moment.utc(this.reserva.fechaFin).format();
   this.reserva.fechaFin = this.reserva.fechaFin.substring(0, this.reserva.fechaFin.length -1);
  this.reservaService.getAulasLibres(this.asistentes, this.proyector, this.reserva).subscribe(response =>
   {this.aulas = this.reservaService.mapearAulas(response);
   this.control=false;});

 /*  this.observable$ = this.reservaService.getAulasLibres(this.asistentes, this.proyector, this.reserva);
   this.reservaService.mapearAulasLibres(this.asistentes, this.proyector, this.reserva)
      .subscribe(aulas => {
        this.aulas = aulas;
      });
   */
   
   console.log(this.aulas)
  
   /*
   (this.aulas.length===0){
    alert(
       'No se encuentran aulas disponibles con esos parámetros, vuelva a intentarlo.'
     );
     this.router.navigate(['/reservas/aulas']);

   }else */

   
  // this.router.navigate(['/reserva-aulas']);
   

}
}
