import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'peliculas/:id',
    component: InfoComponent
  },
  {
    path: 'peliculas',
    component: MoviesComponent
  },
  {
    path: 'mi-cuenta',
    component: LoginComponent
  },
  {
    path: 'carrito',
    component: CartComponent
  },

  {
    path: '' ,
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },
  {
    path: 'registrarse',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
