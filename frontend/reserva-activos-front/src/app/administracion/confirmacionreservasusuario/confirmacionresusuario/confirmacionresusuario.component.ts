import { Component, Input, OnInit } from '@angular/core';
import { ReservaImpl } from 'src/app/reservas/models/reserva-impl';

@Component({
  selector: 'app-confirmacionresusuario',
  templateUrl: './confirmacionresusuario.component.html',
  styles: []
})
export class ConfirmacionresusuarioComponent implements OnInit {
  @Input() reserva: ReservaImpl;
  constructor() { }

  ngOnInit() {
    console.log(this.reserva)
  }

}
