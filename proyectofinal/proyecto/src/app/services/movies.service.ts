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
  private url: string = environment.movieRestApi + this.query + 'Tarantino' + this.apiKey;
  constructor( private httpClient: HttpClient ) { }
  getMovieList(id: number): Observable<Movie> {
    let params = new HttpParams().append('page', String(id));
    return this.httpClient.get<Movie>(this.url,{params});
  };
  getInfo(id: string): Observable<MoviesApi> {
    return this.httpClient.get<MoviesApi>(this.url + id)
  };
}
