import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-boton-pago',
  templateUrl: './boton-pago.component.html',
  styles: [
  ]
})
export class BotonPagoComponent implements OnInit {


  configuracion = {
    sessiontoken:'c9cff9a16cb2f84094b8c4e8380e0eb4755a708a3e2d3027a7ab45c5bee0228f',
    channel:'web',
    merchantid:'341198210',
    purchasenumber:'2020100901',
    amount:'10.5',
    expirationminutes:'20',
    timeouturl:'about:blank',
    merchantlogo:'img/comercio.png',
    formbuttoncolor:'#000000',
    action:'paginaRespuesta'
  }

  ngOnInit(): void {

    }

    OpenFormNiubiz(){
      this.configuracion.sessiontoken;
    }

  }

  

