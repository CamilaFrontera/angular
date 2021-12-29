import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../components/models/movie.model';
import { moviesMock } from './movies.mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

private url = environment.movieRestApi + 'movies'
  constructor( private httpClient: HttpClient ) { }

  // getDetail(id: string): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movie => movie.id === id ))
  // }

  getList(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }

  getById(id: string): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.url}/${id}`)
  }
}
