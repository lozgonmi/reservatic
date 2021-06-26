import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AulaImpl } from 'src/app/reservas/models/aula-impl';
import { environment } from 'src/environments/environment';
import { Reserva } from 'src/app/reservas/models/reserva';
import { ReservaImpl } from 'src/app/reservas/models/reserva-impl';
import { UsuarioImpl } from 'src/app/reservas/models/usuario-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-caulaeditar',
  templateUrl: './caulaeditar.component.html',
  styles: []
})
export class CaulaeditarComponent implements OnInit {
  public reserva: ReservaImpl;
  public usuario: UsuarioImpl;
  public usuario2: UsuarioImpl;
  public aula: AulaImpl;
  public aula2: AulaImpl;
  public reservaEditada : ReservaImpl = new ReservaImpl();

  constructor(private reservaService: ReservaService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      console.log(id)
      if (id) {
          this.reservaEditada.id = id;
          this.reservaService.getReservaId(id).subscribe(response => 
          this.reserva= response);

          this.reservaService.getUsuarioReservaId(id).subscribe(response => 
            this.usuario= response);

          this.reservaService.getAulaReservaId(id).subscribe(reserva => 
            this.aula = reserva);
          }
        })
      }

      onCambio(){

        console.log (this.reserva);
        
        this.usuario2= this.reservaService.getIdUsuarioReservaId(this.usuario)
        console.log(this.usuario2)
        this.aula2= this.reservaService.getIdAulaReservaId(this.aula);
        console.log(this.aula2);
        this.reservaEditada.fechaInicio = moment.utc(this.reserva.fechaInicio).format();
        this.reservaEditada.fechaFin = moment.utc(this.reserva.fechaFin).format();
        this.reservaEditada.activo = `${environment.hostControladores}aulas/${this.aula2.id}`; 
        this.reservaEditada.usuario = `${environment.hostControladores}usuario/${this.usuario2.id}`;
        console.log(this.reservaEditada)
        this.reservaService.putReserva(this.reservaEditada).subscribe((response) =>console.log(response));

      }
}
