import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie, MoviesApi } from '../components/models/movie.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = environment.movieRestApi;
  private apiKey:string = environment.key
  private query: string = '?s='
// private url = environment.movieRestApi;
// private key = environment.key;
  constructor( private httpClient: HttpClient ) { }

  // getDetail(id: string): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movie => movie.id === id ))
  // }

  // getList(): Observable<MoviesApi[]> {
  //   return this.httpClient.get<MoviesApi[]>(this.url+this.key);
  // }

  getMovieList(){
   return this.httpClient.get<Movie>(this.url + this.query + 'Batman' + this.apiKey )
  }


  // getbyId(){
  //   const movie = this.httpClient.get(``)
  //   return movie;
  // }



}
