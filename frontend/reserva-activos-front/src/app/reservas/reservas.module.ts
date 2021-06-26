import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReservasformComponent } from './reservasform/reservasform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AulasComponent } from './aulas/aulas.component';
import { AulaComponent } from './aulas/aula/aula.component';
import { ReservaulasComponent } from './reservaulas/reservaulas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [ ReservasformComponent, AulasComponent, AulaComponent, ReservaulasComponent, UsuariosComponent],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class ReservasModule { }
