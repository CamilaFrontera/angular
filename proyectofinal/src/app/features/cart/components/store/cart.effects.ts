import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { Cart } from "../../../../components/models/cart.model";
import { CartService } from "src/app/features/cart/services/cart.service";
import { cartAddMovie, cartClear, cartDeleteMovie, cartSetContent } from "./cart.actions";

@Injectable()
export class CartEffects {
  constructor(
    private actions: Actions,
    private cartService: CartService,
    private router: Router
  ) { }

  cartAddItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartAddMovie),
      tap(() => console.log('entra')),
      switchMap(action => this.cartService.addToCart(action.movies)),
     map(data => cartSetContent({ movies: data.cartContent as Cart[] })),
    )
  );

  cartDeleteItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartDeleteMovie),
      switchMap(action => this.cartService.removeMovie(action.id)),
      map(data => cartSetContent({ movies: data.cartContent as Cart[] })),
    )
  );
  cartClean$ = createEffect(() =>
  this.actions.pipe(
       ofType(cartClear),
       switchMap(action => this.cartService.clearCart()),
       map(() => cartSetContent({movies: [] as Cart[] })),
     )
 );
}

