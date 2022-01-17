import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userService } from '../services/login.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private userService: userService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add auth header with jwt if account is logged in and request is to the api url
      const token = this.userService.getToken();

      const isApiUrl = request.url.startsWith(environment.restApi);
      if (token && isApiUrl) {
          request = request.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
          });
      }

      return next.handle(request);
  }
}
