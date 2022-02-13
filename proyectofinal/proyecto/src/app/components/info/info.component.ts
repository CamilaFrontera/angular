
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesApi, OnlyMovie } from '../models/movie.model';
import { InfoService } from 'src/app/services/info.service';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Store } from '@ngrx/store';
import { cartAddMovie } from '../cart/store/cart.actions';
import Swal from 'sweetalert2';



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
    private store: Store,
  ) { };
  private subscription = new Subscription;
  movie!: OnlyMovie ;
  allmovies: Cart[]=[];

  movieToCart: Cart= {
    id:'',
    title: '',
    url:'' ,
    imdbID:'' ,
    price: 0,
    exists:false
  };


  ngOnInit(): void {

    this.subscription.add(this.infoService.getById(this.activatedRoute.snapshot.params['id'])
    .subscribe(response => {
      if (response != undefined) {
        this.movie = response;
      } else
        alert("Movie doesn't exist.");
      }
    ));
    this.cartService.getCart().subscribe(movie => this.allmovies = movie);
  };


      //carrito con el profe

      // this.cartService.getList().subscribe(
      //   list => console.log(list)
      // )


  navigateToDetail(id: string) {
    this.router.navigate(['peliculas', id]);
  }

  addToCart(){
    this.movieToCart.id = "";
    this.movieToCart.title = this.movie.Title;
    this.movieToCart.url = this.movie.Poster;
    this.movieToCart.price = 1000;
    this.movieToCart.imdbID = this.movie.imdbID;
    this.movieToCart.exists = true;

    this.store.dispatch(cartAddMovie({movies : this.movieToCart }));
    Swal.fire("You added the movie", "Success");
  };


}

