import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import { InfoComponent } from './components/info/info.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { MoviesService } from './services/movies.service';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    InfoComponent,
    CartComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [CartService,
  MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
