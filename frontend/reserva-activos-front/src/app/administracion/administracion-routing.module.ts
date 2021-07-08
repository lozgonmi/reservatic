import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmoreservaComponent } from '../reservas/reservaulas/confirmoreserva/confirmoreserva.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ConfirmacionreservasusuarioComponent } from './confirmacionreservasusuario/confirmacionreservasusuario.component';



const routes: Routes = [
 
    {
      path:'',
      component: AdministradorComponent
      },
      {
        path: 'validoreserva/:id',
        component: ConfirmacionreservasusuarioComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
