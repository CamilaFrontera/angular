import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie, MoviesApi} from '../components/models/movie.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  private apiKey:string = environment.key
  private query: string = '?s='
  private url: string = environment.movieRestApi + this.query + 'Disney' + this.apiKey;
// private url = environment.movieRestApi;
// private key = environment.key;
  constructor( private httpClient: HttpClient ) { }

  // getDetail(id: string): Observable<Movie | undefined> {
  //   return of(moviesMock.find(movie => movie.id === id ))
  // }

  // getList(): Observable<MoviesApi[]> {
  //   return this.httpClient.get<MoviesApi[]>(this.url+this.key);
  // }

  getMovieList(id: number): Observable<Movie> {
    let params = new HttpParams().append('page', String(id));
    return this.httpClient.get<Movie>(this.url,{params});
  };

  getInfo(id: string): Observable<MoviesApi> {
    return this.httpClient.get<MoviesApi>(this.url + id)
  };
  // getbyId(){
  //   const movie = this.httpClient.get(``)
  //   return movie;
  // }



}
