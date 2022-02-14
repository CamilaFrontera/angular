import { createAction, props } from "@ngrx/store";
import { Cart } from "../../../../components/models/cart.model";
;

export const cartAddMovie = createAction(
  'Cart - Add movie from cart',
  props<{ movies: Cart }>()
);

export const cartDeleteMovie = createAction(
  'Cart - Delete from cart',
  props<{ id: string }>()
);

export const cartClear = createAction(
  'Cart - Clear Cart',
);

export const cartSetContent = createAction(
  'Cart - Set cart content',
  props<{  movies: Cart[] }>()
)
