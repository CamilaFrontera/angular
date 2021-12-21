
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(
    private movieService: MoviesService,
    private router: Router
  ) { }

  movies: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getList().subscribe( movies => this.movies = movies);
  }

  navigateToDetail(id: string) {
    this.router.navigate(['peliculas', id]);
  }

}

