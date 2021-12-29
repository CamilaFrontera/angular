import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';



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

  // para poder desuscribirme

  private suscripcion: Subscription | undefined;

  ngOnInit(): void {
    this.suscripcion = this.movieService.getList().subscribe( movies => this.movies = movies);
    console.log('Hook onInit.')
  }

  ngAfterViewInit(): void {
      console.log('Hook afterViewInit')
  }
  navigateToInfo(id: string) {
    this.router.navigate(['peliculas', id]);
  }

  ngOnDestroy(): void {
    // me desubscribo
    this.suscripcion?.unsubscribe();
      console.log('Hook onDestroy.')
  }

}
