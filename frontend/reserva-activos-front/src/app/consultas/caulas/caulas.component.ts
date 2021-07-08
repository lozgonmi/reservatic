import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/reservas/models/aula';
import { AulaImpl } from 'src/app/reservas/models/aula-impl';
import { Reserva } from 'src/app/reservas/models/reserva';
import { ReservaImpl } from 'src/app/reservas/models/reserva-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-caulas',
  templateUrl: './caulas.component.html',
  styles: []
})
export class CaulasComponent implements OnInit {

  public aulas: Aula[] = [];
  public aula: Aula = new AulaImpl;
  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
  
  this.reservaService.getAulas().subscribe(response => 
    this.aulas= this.reservaService.mapearAulas(response));
  
     
    console.log(this.aulas); 
 }

}