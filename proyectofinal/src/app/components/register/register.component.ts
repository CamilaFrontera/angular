
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
          this.router.navigateByUrl('login');
        } else {
          Swal.fire('Error', status, 'error');
        }
      });
  }
  ngOnInit(): void {
  }
}
