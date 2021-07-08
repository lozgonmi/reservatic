import { Component, Input, OnInit } from '@angular/core';
import { Aula } from 'src/app/reservas/models/aula';
import { AulaImpl } from 'src/app/reservas/models/aula-impl';
import { Reserva } from 'src/app/reservas/models/reserva';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-aulasauxilia',
  templateUrl: './aulasauxilia.component.html',
  styles: []
})
export class AulasauxiliaComponent implements OnInit {
  @Input() aula: AulaImpl;
  @Input() id: number;
  reservas : Reserva [] = [];

  constructor(private  reservaService: ReservaService) { }

  ngOnInit() {

   console.log(this.aula.id)
   this.reservaService.getReservasActivo(this.aula.id).subscribe(response =>
    this.reservas = (this.reservaService.mapearReservasActivo(response)));
    this.reservas = this.reservas.filter(r=> r.reservaAprobada===false);
    
  }

}
