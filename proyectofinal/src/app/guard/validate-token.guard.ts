import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor(private authenticationService: AuthenticationService, private router: Router){}
  canActivate(): Observable<boolean> | boolean{

    return this.authenticationService.validateLogin()
    .pipe(
      tap((valid: any) => {
        if(!valid){
          this.router.navigateByUrl('/login')
        }
      })
    )
  }
  canLoad(): Observable<boolean>| boolean{
    return this.authenticationService.validateLogin()
    .pipe(
      tap((valid: any) => {
        if(!valid){
          this.router.navigateByUrl('/login')
        }
      })
    );
  }
}
