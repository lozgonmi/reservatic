import { Component, Input, OnInit } from '@angular/core';
import { Aula } from '../../models/aula';
import { AulaImpl } from '../../models/aula-impl';
import { ReservaImpl } from '../../models/reserva-impl';
import { ReservaService } from '../../service/reserva.service';
import { ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-confirmoreserva',
  templateUrl: './confirmoreserva.component.html',
  styles: []
})
export class ConfirmoreservaComponent implements OnInit {
  reservaRuta: {capacidad: number, proyector: boolean, fechaInicio: string, fechaFin: string, usuario: number};
  @Input() aula: AulaImpl;
  
  public reserva : ReservaImpl = new ReservaImpl();
  public aulas: Aula[] = [];
  aulaVerDatos: Aula;
  constructor(private reservaService: ReservaService,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(
    

  ) {
    this.reservaRuta = {
      capacidad: this.rutaActiva.snapshot.params.capacidad,
      proyector: this.rutaActiva.snapshot.params.proyector,
      fechaInicio: this.rutaActiva.snapshot.params.fechaInicio,
      fechaFin: this.rutaActiva.snapshot.params.fechaFin,
      usuario: this.rutaActiva.snapshot.params.usuario};

    this.reserva.fechaInicio = moment.utc(this.reservaRuta.fechaInicio).format();
    this.reserva.fechaInicio = this.reserva.fechaInicio.substring(0, this.reserva.fechaInicio.length -1);
    this.reserva.fechaFin = moment.utc(this.reservaRuta.fechaFin).format();
    this.reserva.fechaFin = this.reserva.fechaFin.substring(0, this.reserva.fechaFin.length -1);
    this.reservaService.getAulasLibres(this.reservaRuta.capacidad, this.reservaRuta.proyector, this.reserva).subscribe(response =>
      this.aulas = this.reservaService.mapearAulas(response));
  
    console.log(this.aula)
  }


verDatos(aula: Aula): void {
  this.aulaVerDatos = aula;
}

onCambio(){
    
 // this.reserva.fechaInicio = moment.utc(this.reserva.fechaInicio).format();
  //this.reserva.fechaFin = moment.utc(this.reserva.fechaFin).format();
  this.reserva.activo = `${environment.hostControladores}aulas/${this.aulaVerDatos.id}`; 
  this.reserva.usuario = `${environment.hostControladores}usuario/${this.reservaRuta.usuario}`
  this.reservaService.postReserva(this.reserva).subscribe((response) =>console.log(response));

}
}
