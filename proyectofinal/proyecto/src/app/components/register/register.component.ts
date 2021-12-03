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
    apellido: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email,  Validators.maxLength(35)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)] ),
    fechaNacimiento: new FormControl('', Validators.required),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(9)])
  });


  nombreControl = this.registerForm.controls['nombre'];
  apellidoControl = this.registerForm.controls['apellido'];
  emailControl = this.registerForm.controls['email'];
  telefonoControl = this.registerForm.controls['telefono'];
  fechaNacimientoControl = this.registerForm.controls['fechaNacimiento'];
  passwordControl = this.registerForm.controls['contraseña'];

  ngOnInit(): void {
  }

  save(){

  if (this.registerForm.valid){
    console.log('form válido:  ', this.registerForm.value)}
  }

}
