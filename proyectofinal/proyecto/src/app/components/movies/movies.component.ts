import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies = [
    {
    nombre: 'La sirenita',
    calificacion: 'niños',
    imagen: 'https://m.media-amazon.com/images/I/711Bjf+3KuL._AC_SY679_.jpg'
  },
  {
    nombre: 'Cenicienta',
    calificacion: 'niños',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_937656-MLA25958929008_092017-O.webp'
  },
  {
    nombre: 'Blanca nieves',
    calificacion: 'niños',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_765866-MLA25759897064_072017-O.webp'
  },
  {
    nombre: 'Lilo y stitch',
    calificacion: 'niños',
    imagen: 'https://m.media-amazon.com/images/I/71DhCXgo5xL._AC_SY606_.jpg'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
