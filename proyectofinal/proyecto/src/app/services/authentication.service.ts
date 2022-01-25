import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationResp } from '../components/interfaces/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //url de mi api
  private baseUrl: string = environment.myApi;

  //inyección de servicio
  constructor(private http: HttpClient) { }

  loginForm(username: string, password:string){

    //endpoint
    const url =  `${this.baseUrl}/login`
    //body de peticion
    const body = {
      username, password
    }

    //peticion http post que devuelve observable de tipo AuthenticationResp
    return this.http.post<AuthenticationResp>(url, body);
  }
}
