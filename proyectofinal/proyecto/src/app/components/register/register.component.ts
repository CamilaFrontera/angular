
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService) { }


  // registerForm= new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  //   lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]),
  //   email: new FormControl('', [Validators.required, Validators.email,  Validators.maxLength(35)]),
  //   username: new FormControl('',[Validators.required, Validators.minLength(4), Validators.max(35)]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(24)])
  // });


  registerForm: FormGroup = this.formBuilder.group({
    name:     ['test', [ Validators.required ]],
    lastname:    ['test', [ Validators.required ]],
    username: ['test', [ Validators.required, Validators.minLength(3) ]],
    email:     ['test@gmail.com', [ Validators.required, Validators.email ]],
    password:     ['test', [ Validators.required ]],
  });

  register() {
    const { name, lastname, username, email, password} = this.registerForm.value;

    this.authenticationService.register(name, lastname, username, email, password)
      .subscribe( status => {

        if ( status === true ) {
          this.router.navigateByUrl('peliculas');
        } else {
          Swal.fire('Error', status, 'error');
        }
      });
  }

  ngOnInit(): void {
  }

  // accounts = [
  //   {
  //     name: 'Camila',
  //     lastname: 'Frontera',
  //     email: 'cfrontera@gmail.com',
  //     fechaNacimiento: '06/07/1997',
  //     password: '1234'
  //   },
  //   {
  //     name: 'Juan',
  //     lastname: 'Pérez',
  //     email: 'jperez@gmail.com',
  //     fechaNacimiento: '04/12/1991',
  //     password: '123445'
  //   },
  //   {
  //     name: 'Pedro',
  //     lastname: 'Montiel',
  //     email: 'pedroMont@gmail.com',
  //     fechaNacimiento: '12/01/2001',
  //     password: '12345'
  //   },
  //   {
  //     name: 'Ana',
  //     lastname: 'Benavidez',
  //     email: 'ab_aguantebokita@gmail.com',
  //     fechaNacimiento: '13/11/1979',
  //     password: '1234dfgdfg'
  //   },

  // ]

  // addAccount(name: string, lastname: string, email: string, fechaNacimiento: string, password: string ){
  //   this.accounts.push({
  //     name: name,
  //     lastname: lastname,
  //     email: email,
  //     fechaNacimiento: fechaNacimiento,
  //     password: password,

  //   })

  // }
  // save(){

  // if (this.registerForm.valid){
  //   console.log('form válido:  ', this.registerForm.value)}
  // }

}
