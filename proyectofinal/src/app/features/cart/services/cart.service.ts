import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../../../components/models/cart.model';
import { MoviesApi } from '../../../components/models/movie.model';

@Injectable()
export class CartService {

  constructor(private httpClient: HttpClient) { }
  private url =  environment.cartRestApi

  getCart(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.url);
  }
  addToCart(movieToCart: Cart): Observable<any> {
    return this.httpClient.post<Cart>(this.url, movieToCart)
  }
  clearCart(){
    return this.httpClient.delete<MoviesApi[]>(`${this.url}/clear`);
  }
  removeMovie(id:string):Observable<any>{
    return this.httpClient.delete<boolean>(`${this.url}?id=${id}`);
  };
}
