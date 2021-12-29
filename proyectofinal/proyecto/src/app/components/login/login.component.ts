import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { userService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {



  constructor(private userService: userService) { }

  ngOnInit(): void {
    console.log('Hook onInit de Login.')
  }



  ngAfterViewInit(): void {
      console.log('Hook afterViewInit de Login')
  }


  ngOnDestroy(): void {
      console.log('Hook onDestroy de Login.')
  }

  validateUser(){
      const user =  'chamo';
      const password = '1234';

      this.userService.validateUser(user,password).subscribe(response => console.log(response));
    }
  }


