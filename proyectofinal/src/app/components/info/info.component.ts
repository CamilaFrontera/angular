
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OnlyMovie } from '../models/movie.model';
import { InfoService } from 'src/app/services/info.service';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { Subscription } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Store } from '@ngrx/store';
import { cartAddMovie } from '../../features/cart/components/store/cart.actions';
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


  // movieToCart: Cart= {
  //   id:'',
  //   title: '',
  //   url:'' ,
  //   imdbID:'' ,
  //   price: 0,
  //   exists:false
  // };

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

  addToCart(movies: OnlyMovie){
    var movieToCart: Cart= {
      id:'',
      title: '',
      url:'' ,
      imdbID:'' ,
      price: 0,
      exists:false
    };





    // this.movieToCart.id = "";
   movieToCart.title = movies.Title;
    movieToCart.url = movies.Poster;
    movieToCart.price = 1000;
    movieToCart.imdbID = movies.imdbID;
    movieToCart.exists = true;
    console.log("peli pasada a api antes de cargar api");
    console.log(movieToCart)
    this.store.dispatch(cartAddMovie({movies : movieToCart }));
    // Swal.fire("You added the movie", "Success");
  };

}

