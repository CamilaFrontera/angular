import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesApi } from '../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
  ) {
    console.log('Hook en el constructor.')
   }
  movies: MoviesApi[] = [];
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
      console.log('Hook onDestroy.')
  }
logout(){
  this.router.navigateByUrl('login');
  this.authenticationService.logout();
}
}
