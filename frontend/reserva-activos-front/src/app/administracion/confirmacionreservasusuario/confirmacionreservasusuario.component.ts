import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aula } from 'src/app/reservas/models/aula';
import { Reserva } from 'src/app/reservas/models/reserva';
import { Usuario } from 'src/app/reservas/models/usuario';
import { UsuarioImpl } from 'src/app/reservas/models/usuario-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-confirmacionreservasusuario',
  templateUrl: './confirmacionreservasusuario.component.html',
  styles: []
})
export class ConfirmacionreservasusuarioComponent implements OnInit {
  public id = 0;
  usuario: Usuario = new UsuarioImpl();
  aulas: Aula [] = [];
  reservasPorActivo : Reserva [] = [];
  reservas : Reserva [] = [];

  constructor( private  reservaService: ReservaService,
    private activateRoute: ActivatedRoute)
     { this.id = activateRoute.snapshot.params['id']}

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      console.log(id)
      

        this.reservaService.getActivoPorUsuario(this.id).subscribe(response => 
          this.aulas= this.reservaService.mapearReservasActivoPorUsuario(response)); 
          console.log(this.aulas);
      /*  this.aulas.forEach(r => {
          this.reservaService.getReservasActivo(r.id).subscribe(response =>
          this.reservasPorActivo = (this.reservaService.mapearReservasActivo(response)));
          this.reservas.concat(this.reservasPorActivo);
          } )*/
        
      
      
    });
   
  }
}
