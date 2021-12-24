import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy, AfterViewInit{


  constructor(
    private movieService: MoviesService,
    private router: Router
  ) {

    console.log('Hook en el constructor.')
   }

  movies: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getList().subscribe( movies => this.movies = movies);
    console.log('Hook onInit.')
  }

  ngAfterViewInit(): void {
      console.log('Hook afterViewInit')
  }
  navigateToInfo(id: string) {
    this.router.navigate(['peliculas', id]);
  }

  ngOnDestroy(): void {
      console.log('Hook onDestroy.')
  }

}
