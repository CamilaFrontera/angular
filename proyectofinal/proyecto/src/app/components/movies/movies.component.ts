import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesApi } from '../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy, AfterViewInit{

  constructor(
    private movieService: MoviesService,
    private router: Router, private authenticationService: AuthenticationService
  ) {

    console.log('Hook en el constructor.')
   }


  get loggedUser(){
    return this.authenticationService.loggedUser;
  }

  movies: MoviesApi[] = [];

  // para poder desuscribirme

  private suscripcion: Subscription | undefined;

  ngOnInit(): void {
    this.suscripcion = this.movieService.getMovieList().subscribe( movieList=> {this.movies= movieList.Search
    console.log(this.movies);
    console.log(movieList)
    console.log('Hook onInit.')
    })
  }

  ngAfterViewInit(): void {
      console.log('Hook afterViewInit')
  }

  details(id: string) {
    this.router.navigate(['peliculas', id]);
  }

  ngOnDestroy(): void {
    // me desubscribo
    // this.suscripcion?.unsubscribe();
      console.log('Hook onDestroy.')
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
