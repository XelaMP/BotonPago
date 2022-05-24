import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../pagoweb/interfaces/User';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceTokenService {
  //URL_API: string;
  constructor(private http: HttpClient) { 
    //this.URL_API = environment.api + '/login';
  }

  sessionIn(customerEmail: string, token: string, channel: string): void {
    sessionStorage.setItem('transactionToken', token);
    sessionStorage.setItem('customerEmail',customerEmail);
    sessionStorage.setItem('channel',channel);
  
  }
  login(item: User): Observable<any>{
    console.log("asdasdasdasd");
    return this.http.post('paginarespuesta', item);
 
  }
  
  logOut(): void {
    sessionStorage.removeItem('transactionToken');
    sessionStorage.removeItem('customerEmail');
    sessionStorage.removeItem('channel');
  }


  public postPrueba(url:string, body:any){
    return this.http.post(url,body);
  }

 
}

