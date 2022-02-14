import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { OnlyMovie } from '../components/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private union = '?i=';
  private url = environment.movieRestApi ;
  private apiKey = environment.key;
  constructor(private httpClient: HttpClient) { }
  getById( id: string): Observable<OnlyMovie | undefined>{
    return this.httpClient.get<OnlyMovie>(this.url+ this.union + id+this.apiKey);
  };
}
