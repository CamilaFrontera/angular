import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  async login(email: string, password: string){
    try{
      return await this.angularFireAuth.signInWithEmailAndPassword(email,password);
    }catch (err){
console.log('error en login', err);
return null;
    }
  }

  async register(email: string, password: string){
    try{
      return await this.angularFireAuth.createUserWithEmailAndPassword(email,password);
    }catch (err){
console.log('error en login', err);
return null;
    }
  }
}
