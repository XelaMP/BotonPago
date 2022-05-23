import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonPagoComponent } from './pagoweb/pages/boton-pago/boton-pago.component';
import { PaginarespuestaComponent } from './pagoweb/pages/paginarespuesta/paginarespuesta.component';

const routes: Routes = [
  {
    path: 'botonpago',
    component: BotonPagoComponent
  },
  {
    path: 'paginarespuesta',
    component: PaginarespuestaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
