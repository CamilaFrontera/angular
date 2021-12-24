import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/users.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {



  constructor() { }

  ngOnInit(): void {
    console.log('Hook onInit de Login.')
  }



  ngAfterViewInit(): void {
      console.log('Hook afterViewInit de Login')
  }


  ngOnDestroy(): void {
      console.log('Hook onDestroy de Login.')
  }

  }


