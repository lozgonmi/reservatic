import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ReservaImpl } from 'src/app/reservas/models/reserva-impl';
import { UsuarioImpl } from 'src/app/reservas/models/usuario-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-caulapp',
  templateUrl: './caulapp.component.html',
  styles: []
})
export class CaulappComponent implements OnInit {
  @Input() reserva: ReservaImpl;
  usuario: UsuarioImpl;
  fechai: string;
  fechaf: string;
  constructor(private  reservaService: ReservaService) { }

  ngOnInit() {
         console.log(this.reserva)
          this.fechai = moment(this.reserva.fechaInicio).locale('es').format('LLLL');
          this.fechaf = moment(this.reserva.fechaFin).locale('es').format('LLLL');
          this.reservaService
          .getUsuarioReservaId(this.reserva.id)
          .subscribe((reserva) => (this.usuario = reserva));
     
  }

  borrar(){
    console.log(this.reserva.id)
    this.reservaService.borrar(this.reserva.id).subscribe(response => console.log(this.reserva));






  }
  
  
}
