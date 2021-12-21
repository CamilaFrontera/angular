import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

  selectedPerson(person: User){

  }

  }


