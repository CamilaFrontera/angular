
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OnlyMovie } from '../models/movie.model';
import { InfoService } from 'src/app/services/info.service';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { Cart } from '../models/cart.model';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private infoService: InfoService,
    private router: Router,
    private cartService : CartService,
  ) { }
  movie!: OnlyMovie ;

  movieToCart : Cart = {id: '', url: '', title: ' ', price: 0, imdbID: ''}

private subscription:  Subscription | undefined;
  ngOnInit(): void {

    this.infoService.getById(this.activatedRoute.snapshot.params['id']).subscribe(movies => {this.movie=movies; console.log(movies), console.log(this.movie)})


console.log(this.movie)
    // this.movieService.getList().subscribe( movies => this.movies = movies);
  }

  navigateToDetail(id: string) {
    this.router.navigate(['peliculas', id]);
  }

  addToCart(){

    this.movieToCart.title = this.movie.Title;
    this.movieToCart.url = this.movie.Poster;
    this.movieToCart.price = 500;
    this.movieToCart.imdbID = this.movie.imdbID;

// this.subscription?.add(
  this.cartService.postMovie(this.movieToCart).subscribe(data => console.log(data))

}

}

