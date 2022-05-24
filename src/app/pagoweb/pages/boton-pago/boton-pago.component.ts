import { Component, OnInit } from '@angular/core';
import { ServiceTokenService } from 'src/app/services/service-token.service';
import { User } from '../../interfaces/User';

declare var VisanetCheckout: any;
declare var params: any;
@Component({
  selector: 'app-boton-pago',
  templateUrl: './boton-pago.component.html',
  styles: [
  ]
})
export class BotonPagoComponent implements OnInit {
  
  constructor(private ls: ServiceTokenService){
  }
  
  ngOnInit(): void {
    }
  openForm() {
      VisanetCheckout.configure({
        sessiontoken:'655337882d1ef51ff6b0ee6840d5c5dc2e374ec5d44c7e7134abdd1e72aa78a3',
        channel:'web',
        merchantid:'341198210',
        purchasenumber:'2020100903',
        amount:'10.5',
        expirationminutes:'20',
        timeouturl:'about:blank',
        merchantlogo:'img/comercio.png',
        formbuttoncolor:'#000000',
        action: 'paginarespuesta'
       // complete: this.complete('params')
      });
      VisanetCheckout.open(); 
    }

  complete(params: any){
    alert(JSON.stringify(params));
    console.log(params);
  }

    login(): void{
      const user: User = {
        transactionToken: '',
        email: '',
        channel: ''
      };
    this.ls.login(user).subscribe(res => {
      const token = res.token;
      const bodyToken = JSON.parse(atob(token.split('.')[1]));
      const userRes = bodyToken.result;
      if(userRes){
 this.ls.sessionIn(userRes.transactionToken, userRes.email, userRes.channel);
      }
     
    })
      
    }

    

  }

  

