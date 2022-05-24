import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagowebModule } from './pagoweb/pagoweb.module';
import { SharedModule } from './shared/shared.module';
import { ServiceTokenService } from './services/service-token.service';
import { BotonPagoComponent } from './pagoweb/pages/boton-pago/boton-pago.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PagowebModule,
    SharedModule
  ],
  providers:[
    ServiceTokenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
