import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { Movie } from '../components/models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: Movie[] = [];


  constructor() { }

  getlist(): Observable<Movie[]>{
    return of(this.list)};

  }


  // addMovie(movie: Movie){
  //   if(this.list.includes(m => {
  //     return m.id === Movie.id
  //   })){
  //     this.list.push(movie)
  //   }

  //   console.log(this.list);
  // }


  // deleteMovie(movie: Movie){
  //   //tengo que remover del array esa pelicula por id???

  // }


