import { Injectable } from '@angular/core';
import { User } from '../components/models/users.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class userService {

private url = environment.movieRestApi + 'users'

  constructor( private httpClient: HttpClient) { }


  validateUser(user: string, password:string): Observable<Boolean>{
    return this.httpClient.post<boolean>(this.url, {user,
    password});
  }

  addUser(user : User){
    this.httpClient.post(`${this.url}users` , user);
  }
}