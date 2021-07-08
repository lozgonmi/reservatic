import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from '../models/aula';
import { AulaImpl } from '../models/aula-impl';


import { ReservaService } from '../service/reserva.service';

@Component({
  selector: 'app-reservasform',
  templateUrl: './reservasform.component.html',
  styles: []
})
export class ReservasformComponent implements OnInit {
  
  reserva: Aula = new AulaImpl();
  public id = 0;

  constructor( 
    private  reservaService: ReservaService,
    private activateRoute: ActivatedRoute,
    private router: Router
  )
  {this.id = activateRoute.snapshot.params['id']}

  ngOnInit():void {
    
    this.cargarAula();
    console.log(this.id);
  }
  cargarAula(): void {
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      if (id) {
        this.reservaService
          .getAulaId(id)
          .subscribe((reserva) => (this.reserva = reserva));
      }
      
    });
    
  }
}
