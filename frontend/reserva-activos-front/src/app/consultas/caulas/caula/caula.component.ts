import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaImpl } from 'src/app/reservas/models/aula-impl';
import { Reserva } from 'src/app/reservas/models/reserva';
import { Usuario } from 'src/app/reservas/models/usuario';
import { UsuarioImpl } from 'src/app/reservas/models/usuario-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-caula',
  templateUrl: './caula.component.html',
  styles: []
})
export class CaulaComponent implements OnInit {
  @Input() aula: AulaImpl;
  reservas: Reserva[]=[];
  
  public usuario : UsuarioImpl = new UsuarioImpl();
  
  reserva: Reserva;
  
  constructor(private reservaService: ReservaService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.aula)
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      console.log(id)
      if (id) {
    this.reservaService.getReservasActivo(id).subscribe(response => 
      this.reservas= this.reservaService.mapearReservasActivo(response)); }});
      console.log(this.reservas)
      
  }
    
}
