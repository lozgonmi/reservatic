import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Aula } from '../../models/aula';
import { AulaImpl } from '../../models/aula-impl';
import { ReservaImpl } from '../../models/reserva-impl';
import { Usuario } from '../../models/usuario';
import { ReservaService } from '../../service/reserva.service';
import * as moment from 'moment';
import { UsuarioImpl } from '../../models/usuario-impl';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styles: []
})
export class AulaComponent implements OnInit {
  @Input() aula: AulaImpl;
  @Output() aulaSeleccionada = new EventEmitter<Aula>();
  fechaInicio : string;
  fechaFin : string;
  //id : number;
  
 // public usuario : Usuario;
  public aulas : Aula[] =[];
  public aulados : Aula;
 
 
  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    
  }
/*
  onCambio(){
    //this.usuarios.forEach(e => {if(this.id == e.id) this.reserva.usuario= e});
 // this.id=1;
  console.log(this.usuarios);
  console.log(this.aula.id)
        console.log(this.aulas)

        this.reserva.fechaInicio = moment.utc(this.reserva.fechaInicio).format();
        this.reserva.fechaFin = moment.utc(this.reserva.fechaFin).format();
       
    
 
    /*this.usuarios.forEach(a=> {if (a.id == 1) this.usuario = a});
    this.aulas.forEach(a=>{if (a.id == 1) this.aulados = a});
    this.reserva.Activo = this.aulados;
    this.reserva.Usuario = this.usuario;
    this.reserva.activo = `${environment.hostControladores}aulas/${this.aula.id}`;
   
    this.reserva.usuario = `${environment.hostControladores}usuario/${this.usuario.id}`
    this.reservaService.postReserva(this.reserva).subscribe((response) =>console.log(response));
    
  }*/
}
