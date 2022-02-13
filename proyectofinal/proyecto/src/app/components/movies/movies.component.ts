import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesApi } from '../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy, AfterViewInit{

  get loggedUser(){
    return this.authenticationService.loggedUser;
  }
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private cartservice: CartService
  ) {

    console.log('Hook en el constructor.')
   }

  movies: MoviesApi[] = [];

  // para poder desuscribirme

  private suscripcion: Subscription | undefined;

  ngOnInit(): void {
    for(let i = 1; i<2; i++){
      this.movieService.getMovieList(i).subscribe(response => {
        this.movies = this.movies.concat(response.Search);
        console.log(this.movies)
      });
    }
  }

  ngAfterViewInit(): void {
      console.log('Hook afterViewInit')
  }

  details(id: string) {
    this.router.navigate(['peliculas',  id]);
  }

  ngOnDestroy(): void {
    // me desubscribo
    // this.suscripcion?.unsubscribe();
      console.log('Hook onDestroy.')
  }

logout(){
  this.router.navigateByUrl('login');
  this.authenticationService.logout();
}
  //para busquedas
  // async onMovieSelected(movie: string){
  //   try{
  //     const response = await this.movieService.getMovieList(movie, 'movie');
  //     console.log(response);
  //   }catch(e){
  //     console.log(e);

  //   }}


}
