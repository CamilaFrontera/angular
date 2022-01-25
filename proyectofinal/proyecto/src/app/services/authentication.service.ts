import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationResp } from '../components/interfaces/authentication';
import jwt_decode from 'jwt-decode';
import { AuthSettings } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //url de mi api
  private baseUrl: string = environment.myApi;

  //inyección de servicio
  constructor(private httpClient: HttpClient) { }

  private uid = '';
  private username = '';
  private token: any = null;

  login(username: string, password:string){

    //endpoint
    const url =  `${this.baseUrl}/users/login`
    //body de peticion
    const body = {
      username, password
    }

    //peticion http post que devuelve observable de tipo AuthenticationResp
    return this.httpClient.post<AuthenticationResp>(url, body)
    // .pipe (
    //   map(response => {
    //     if (response.status === true) {

    //       const decodedToken: any = jwt_decode(this.token);
    //       this.username = decodedToken?.username;
    //       this.uid = this.uid;
    //       return true;}

    //       else {
    //         this.token = null;
    //         return false;
    //       }
    //     }
    //     ))
  }


  isUserLoggedIn(){
    return this.username != '';
}

  }





