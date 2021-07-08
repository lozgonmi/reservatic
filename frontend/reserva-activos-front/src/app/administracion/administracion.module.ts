import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';

import { AdministradorComponent } from './administrador/administrador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmacionreservasusuarioComponent } from './confirmacionreservasusuario/confirmacionreservasusuario.component';
import { ConfirmacionresusuarioComponent } from './confirmacionreservasusuario/confirmacionresusuario/confirmacionresusuario.component';

import { AulasauxiliaComponent } from './confirmacionreservasusuario/aulasauxilia/aulasauxilia.component';
import { AulasauxComponent } from './confirmacionreservasusuario/aulasauxilia/aulasaux/aulasaux.component';




@NgModule({
  declarations: [ AdministradorComponent,  ConfirmacionreservasusuarioComponent, ConfirmacionresusuarioComponent,  AulasauxiliaComponent, AulasauxComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
