import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaulaComponent } from './caulas/caula/caula.component';
import { CaulaeditarComponent } from './caulas/caulaeditar/caulaeditar.component';
import { CaulasComponent } from './caulas/caulas.component';
import { ConsultasComponent } from './consultas/consultas.component';


const routes: Routes = [
  
  {
    path: '',
    component: CaulasComponent
  },
  {
    path: 'reservaula/:id',
    component: CaulaComponent
  },
  {
    path: 'editar/:id',
    component: CaulaeditarComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
