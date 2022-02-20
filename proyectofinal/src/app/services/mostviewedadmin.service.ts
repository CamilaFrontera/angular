import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminMovie } from '../components/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MostviewedadminService {

  urlMostViewed = environment.movieAdmin
  constructor(private httpClient: HttpClient) { }

  //edita una pelicula

  updateMovies(movie: AdminMovie): Observable<AdminMovie> {
   return this.httpClient.put<AdminMovie>(this.urlMostViewed+ '/' + movie.id, movie);
  }

  //Postea una pelicula

  addMovie(movie: AdminMovie): Observable<AdminMovie> {
    return this.httpClient.post<AdminMovie>(this.urlMostViewed, movie);
  }

 //Manejo de Errores
 private handleError(error: HttpErrorResponse){

  //Error del Front
  if (error.error instanceof ErrorEvent){
    console.warn("Front error", error.error.message);

  //Error del back
  } else {
    console.warn(`Back error: ${error.status}, body error:
    ${error.message}`)
  }

  return throwError('HTTP comunication ERROR');

}
  //Elimina la pelicula

  deleteMovie(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.urlMostViewed}/${id}`)
      //Esto acá es para cuando se busca una peli que no existe en nuestro sistema
      .pipe(catchError(this.handleError));
  }
}
