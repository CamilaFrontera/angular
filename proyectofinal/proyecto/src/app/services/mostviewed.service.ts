import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminMovie } from '../components/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MostviewedService {

  private urlAdmin = environment.movieAdmin

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable< AdminMovie[]>{
    return this.httpClient.get< AdminMovie[]>(this.urlAdmin);
  }
}
