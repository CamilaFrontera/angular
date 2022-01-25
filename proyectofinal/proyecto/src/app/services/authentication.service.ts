import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, pipe, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationResp, LoggedUser } from '../components/interfaces/authentication';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //url de mi api
  private baseUrl: string = environment.myApi;
  //user para guardar informacion
  private _loggedUser!: LoggedUser;

  get loggedUser(){
    return{...this._loggedUser};
  }

  //inyección de servicio
  constructor(private httpClient: HttpClient) { }

  // private uid = '';
  private username = '';
  // private token: any = null;

  login(username: string, password:string){

    //endpoint
    const url =  `${this.baseUrl}/users/login`
    //body de peticion
    const body = {
      username, password
    }

    //peticion http post que devuelve observable de tipo AuthenticationResp
    return this.httpClient.post<AuthenticationResp>(url, body)


    //capturar informacion del usuario loggeado
    .pipe(
      tap(resp =>{
        if(resp.status === true){
          localStorage.setItem('token', resp.token!)
          this._loggedUser = {
            uid: resp.uid,
            username: resp.username,

          }
        }
      }),
      map(valid => valid.status),
      catchError(err => of(err.error.msg))
    )

  }

  validateLogin(){
    const url = `${this.baseUrl}/users/revalidate`;
    //creamos header para la peticion
    const headers = new HttpHeaders()
    .set('z-token', localStorage.getItem('token') || '');     //seteamos en localstorage
    return this.httpClient.get(url, {headers})

  }



  isUserLoggedIn(){
    return this.username != '';
}

  }





