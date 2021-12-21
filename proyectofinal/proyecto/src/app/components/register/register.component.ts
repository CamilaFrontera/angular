
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }


  registerForm= new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]),
    email: new FormControl('', [Validators.required, Validators.email,  Validators.maxLength(35)]),
    // telefono: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)] ),
    fechaNacimiento: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(24)])
  });


  nombreControl = this.registerForm.controls['nombre'];
  apellidoControl = this.registerForm.controls['apellido'];
  emailControl = this.registerForm.controls['email'];
  // telefonoControl = this.registerForm.controls['telefono'];
  fechaNacimientoControl = this.registerForm.controls['fechaNacimiento'];
  passwordControl = this.registerForm.controls['password'];

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
