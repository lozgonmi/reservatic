import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/reservas/models/aula';
import { AulaImpl } from 'src/app/reservas/models/aula-impl';
import { Reserva } from 'src/app/reservas/models/reserva';
import { Usuario } from 'src/app/reservas/models/usuario';
import { UsuarioImpl } from 'src/app/reservas/models/usuario-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styles: []
})
export class AdministradorComponent implements OnInit {

  constructor(private reservaService: ReservaService) { }
  usuario: Usuario = new UsuarioImpl();
  aulas: Aula [] = [];
  reservasPorActivo : Reserva [] = [];
  reservas : Reserva [] = [];
  ngOnInit() {

    
  }
  /*
  onCambio(){

    this.reservaService.getActivoPorUsuario(this.usuario.id).subscribe(response => 
      this.aulas= this.reservaService.mapearReservasActivoPorUsuario(response)); 
      console.log(this.aulas);
    this.aulas.forEach(r => {
      this.reservaService.getReservasActivo(r.id).subscribe(response =>
      this.reservasPorActivo = (this.reservaService.mapearReservasActivo(response)));
      this.reservas.concat(this.reservasPorActivo);
      } )

      console.log(this.reservas)


    

  }*/
}
