import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= {
    email:'',
    password: ''
  }



  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    const{email,password}= this.user;
    this.userService.login(email,password).then(res=>{
      console.log("logueado", res);

    })
  }

}
