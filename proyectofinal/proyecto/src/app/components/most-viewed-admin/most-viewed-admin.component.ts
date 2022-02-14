import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MostviewedService } from 'src/app/services/mostviewed.service';
import { MostviewedadminService } from 'src/app/services/mostviewedadmin.service';
import { AdminMovie } from '../models/movie.model';

@Component({
  selector: 'app-most-viewed-admin',
  templateUrl: './most-viewed-admin.component.html',
  styleUrls: ['./most-viewed-admin.component.css']
})
export class MostViewedAdminComponent implements OnInit,OnDestroy {
  AllMovies: AdminMovie [] = [];
  private subscription = new Subscription
  continue: number  = -2;
  mvmovies: AdminMovie ={
    id: 0,
    title: "",
    genre: "",
    characters: "",
    description: "",
    year: 0,
    image: ""
  }
  constructor(
    private mvAdmin: MostviewedadminService,
    private mv: MostviewedService
    ) { }

    updateForm = new FormGroup ({
      id: new FormControl('',[Validators.required]),
      title: new FormControl(''),
      genre: new FormControl(''),
      characters: new FormControl(''),
      description: new FormControl(''),
      year: new FormControl(''),
      image: new FormControl('')

    });

  ngOnInit(): void {
    this.subscription.add(this.mv.getMovies().subscribe(data => {
      this.AllMovies = data;
      console.log(this.AllMovies)
    }));
  }

//Metodo de edicion 
makesChanges(){
  this.continue = this.AllMovies.findIndex(m => m.id == this.updateForm.controls['id'].value);
  if(this.continue != -1){

    //Pasamos todos los datos de la peli a editar previos a los cambios
    this.mvmovies = this.AllMovies[this.continue];
    this.mvmovies.id = this.updateForm.controls['id'].value;

    //Validacion para ingresar los cambios

    if (this.updateForm.controls['title'].value != ''){
      this.mvmovies.title = this.updateForm.controls['title'].value;
    }
    //Incompleto. ACOMODAR     
    if (this.updateForm.controls['genre'].value != ''){
      this.mvmovies.genre = this.updateForm.controls['genre'].value;
    }

    if(this.updateForm.controls['characters'].value != ''){
      this.mvmovies.characters = this.updateForm.controls['characters'].value;
    }

      if (this.updateForm.controls['description'].value != ''){
        this.mvmovies.description = this.updateForm.controls['description'].value;
        this.mvmovies.description = this.mvmovies.description.toLowerCase().trim();
      }

if(this.updateForm.controls['year'].value > 1900){
  this.mvmovies.year = this.updateForm.controls['year'].value;
}

if(this.updateForm.controls['image'].value != '')
{this.mvmovies.image = this.updateForm.controls['image'].value;

}
this.subscription.add(this.mvAdmin.updateMovies(this.mvmovies).subscribe(data => alert('movie edited')))
} else {
  alert ('You are looking for an unexisting movie');
}}

 //Formulario de creacion de pelicula
 createForm = new FormGroup({
  id: new FormControl('',[Validators.required]),
  title: new FormControl('',[Validators.required]),
  genre: new FormControl('',[Validators.required]),
  characters: new FormControl('',[Validators.required]),
  description: new FormControl('',[Validators.required]),
  year: new FormControl('',[Validators.required]),
  image: new FormControl('',[Validators.required])

})
createMovie(){

  this.subscription.add(this.mvAdmin.addMovie(
    {
    id: this.createForm.controls['id'].value,
    title: this.createForm.controls['title'].value,
    genre: this.createForm.controls['genre'].value,
    characters: this.createForm.controls['characters'].value,
    description: this.createForm.controls['description'].value,
    year: this.createForm.controls['year'].value,
    image: this.createForm.controls['image'].value,
    }

  ).subscribe(data => {
    console.log(data);
    alert('Movie created')

}));

}
deleteForm = new FormGroup({
  id: new FormControl('',[Validators.required]),
})

deleteMovie(){
  this.subscription.add(this.mvAdmin.deleteMovie(this.deleteForm.controls['id'].value).subscribe(
    data => {
    alert(data);
    }

  ))
}
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
