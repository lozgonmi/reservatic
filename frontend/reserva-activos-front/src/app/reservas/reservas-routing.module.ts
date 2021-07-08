import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasComponent } from './aulas/aulas.component';
import { ReservasformComponent } from './reservasform/reservasform.component';
import { ConfirmoreservaComponent } from './reservaulas/confirmoreserva/confirmoreserva.component';
import { ReservaulasComponent } from './reservaulas/reservaulas.component';


const routes: Routes = [
  {
    path: 'aulas',
    component: ReservaulasComponent
  },
  {
    path: 'coches',
    component: AulasComponent
  },
  {
    path: 'confirmoreserva/:capacidad/:proyector/:fechaInicio/:fechaFin/:usuario',
    component: ConfirmoreservaComponent
  },
  {
    path: 'formulario/:id',
    component: ReservasformComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
