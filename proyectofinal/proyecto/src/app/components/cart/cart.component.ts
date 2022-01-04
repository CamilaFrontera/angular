import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {

    this.subscription = this.cartService.getList().subscribe(data => {
      this.allMoviesInCart=data;

      console.log(this.allMoviesInCart)
    })
  }

  private subscription : Subscription | undefined;

  allMoviesInCart : Cart[] = [];
}
