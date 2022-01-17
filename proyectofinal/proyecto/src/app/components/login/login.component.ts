import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { userService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {



  constructor(private userService: userService, private router: Router) { }

  ngOnInit(): void {
    console.log('Hook onInit de Login.')
  }



  ngAfterViewInit(): void {
      console.log('Hook afterViewInit de Login')
  }


  ngOnDestroy(): void {
      console.log('Hook onDestroy de Login.')
  }


  //comento xq reemplazamos la funcion validar
  // validateUser(){
  //     const user =  'chamo';
  //     const password = '1234';

  //     this.userService.validateUser(user,password).subscribe(response => console.log(response));
  //   }

  error!: string;




  form: FormGroup = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      this.userService.validateCredentials(this.form.get('user')?.value, this.form.get('password')?.value, )
      .subscribe(valid => {
        if (valid) {
          this.router.navigate(['peliculas']);
        } else {
          this.error = 'Invalid User or Password';
        }
      })
    }
  }
  }


