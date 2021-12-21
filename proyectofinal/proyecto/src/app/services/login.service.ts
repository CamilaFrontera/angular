import { Injectable } from '@angular/core';
import { usersMock } from './users.mock';
import { User } from '../components/models/users.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  // validateLogin(email: string,password: string):Observable<User>{
  //  let user: User | undefined = usersMock.find(user => email === user.email);

  //   // return of (user);


  // }
  constructor() { }
}
