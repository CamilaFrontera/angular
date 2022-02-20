import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MostviewedService } from 'src/app/services/mostviewed.service';
import { AdminMovie } from '../models/movie.model';

@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.css']
})
export class MostViewedComponent implements OnInit {

  allMovies : AdminMovie[] = [];



  private subscription = new Subscription;
  constructor(private mvservice: MostviewedService) { }

  ngOnInit(): void {

    this.subscription.add(this.mvservice.getMovies().subscribe(movies => {

      this.allMovies = movies;

      console.log(this.allMovies);

    }))

  }
  }


