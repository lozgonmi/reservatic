import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { AulaImpl } from 'src/app/reservas/models/aula-impl';
import { ReservaImpl } from 'src/app/reservas/models/reserva-impl';
import { UsuarioImpl } from 'src/app/reservas/models/usuario-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-aulasaux',
  templateUrl: './aulasaux.component.html',
  styles: []
})
export class AulasauxComponent implements OnInit {
  @Input() reserva: ReservaImpl;
  @Input() idReserva: number;
  @Input() idAula: number;
  @Input() id: number;
  usuario: UsuarioImpl;
  fechai: string;
  fechaf: string;
  constructor(private  reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaService.getUsuarioReservaId(this.idReserva).subscribe(response =>
      this.usuario= response);
      this.fechai = moment(this.reserva.fechaInicio).locale('es').format('LLLL');
      this.fechaf = moment(this.reserva.fechaFin).locale('es').format('LLLL');
      
  }
  onCambio(){

   
        console.log(this.idAula)
        console.log(this.idReserva)
        console.log(this.id)
        this.reserva.fechaInicio = moment.utc(this.reserva.fechaInicio).format();
        this.reserva.fechaInicio = this.reserva.fechaInicio.substring(0, this.reserva.fechaInicio.length -1);
        this.reserva.fechaFin = moment.utc(this.reserva.fechaFin).format();
        this.reserva.fechaFin = this.reserva.fechaFin.substring(0, this.reserva.fechaFin.length -1);
        this.reserva.activo = `${environment.hostControladores}aulas/${this.idAula}`; 
        this.reserva.usuario = `${environment.hostControladores}usuario/${this.id}`;
        this.reserva.reservaAprobada = true;
        console.log(this.reserva)
        this.reservaService.putReserva(this.reserva).subscribe((response) =>console.log(response));
  }
}
