import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceTokenService } from './services/service-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private route:ActivatedRoute, private ServiceTokenService:ServiceTokenService){}

  ngOnInit(): void {
      
  }

  public prueba(){
    this.ServiceTokenService.postPrueba(`http://localhost:4200/action`,
      {
        texto: 'accion prueba'
      }
    )
    .subscribe((res: any) =>{
      console.log('pruebaaa0010101010!!!!!'+ res);
    })
  }
  

}
