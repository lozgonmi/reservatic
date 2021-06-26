import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then(m => m.ReservasModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
