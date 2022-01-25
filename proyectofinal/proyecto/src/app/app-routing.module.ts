import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { MostViewedAdminComponent } from './components/most-viewed-admin/most-viewed-admin.component';
import { MostViewedComponent } from './components/most-viewed/most-viewed.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';
import { ProtectedRouteGuard } from './guard/protected-guard.guard';


const routes: Routes = [
  {
    path: 'peliculas/:id',
    component: InfoComponent
  },
  {
    path: 'peliculas',

    component: MoviesComponent,

    //lazyload
    // loadChildren: () => import('./components/movies/movies.component').then( m => m.MoviesComponent)

  },
  {
    path: 'mi-cuenta',

    component: LoginComponent
  },
  {
    path: 'carrito',
    canActivate: [ProtectedRouteGuard],
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
  },



  {
  path: 'admin',
  canActivate: [ProtectedRouteGuard],
  component: MostViewedAdminComponent
},

  {
    path: 'most-viewed',
    canActivate: [ProtectedRouteGuard],
    component: MostViewedComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
