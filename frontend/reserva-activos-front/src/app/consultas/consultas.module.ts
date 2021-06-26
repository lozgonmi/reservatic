import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas/consultas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaulasComponent } from './caulas/caulas.component';
import { CaulaComponent } from './caulas/caula/caula.component';
import { ReservaService } from '../reservas/service/reserva.service';

import { CaulappComponent } from './caulas/caulapp/caulapp.component';
import { CaulaeditarComponent } from './caulas/caulaeditar/caulaeditar.component';


@NgModule({
  declarations: [ConsultasComponent, CaulasComponent, CaulaComponent,  CaulappComponent, CaulaeditarComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [ReservaService]
})
export class ConsultasModule { }
