import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {



  constructor( private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    console.log('Hook onInit de Login.')
  }



  ngAfterViewInit(): void {
      console.log('Hook afterViewInit de Login')
  }




  //comento xq reemplazamos la funcion validar
  // validateUser(){
  //     const user =  'chamo';
  //     const password = '1234';

  //     this.userService.validateUser(user,password).subscribe(response => console.log(response));
  //   }

  error!: string;




  loginForm: FormGroup = this.formBuilder.group({
    username: new FormControl('test', Validators.required),
    password: new FormControl('test', [Validators.required, Validators.minLength(4)]),
  });

  login() {
    console.log(this.loginForm.value);

    const {username, password} = this.loginForm.value;
    this.authenticationService.login(username, password)
      .subscribe(status =>{

        if(status === true){
          this.router.navigateByUrl('peliculas');
        }else{
          Swal.fire('Error', status, 'error');
        }
      });
  }
  }


