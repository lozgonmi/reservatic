import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasComponent } from './aulas/aulas.component';
import { ReservasformComponent } from './reservasform/reservasform.component';


const routes: Routes = [
  {
    path: 'aulas',
    component: AulasComponent
  },
  {
    path: 'coches',
    component: AulasComponent
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
