import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonPagoComponent } from './pages/boton-pago/boton-pago.component';
import { RouterModule } from '@angular/router';
import { PaginarespuestaComponent } from './pages/paginarespuesta/paginarespuesta.component';



@NgModule({
  declarations: [
    BotonPagoComponent,
    PaginarespuestaComponent,
  ],
  exports: [
    BotonPagoComponent,
    PaginarespuestaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagowebModule { }
