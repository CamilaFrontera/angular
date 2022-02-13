export interface MoviesApi{
  status: boolean;
  id: string,
  title: string,
  url: string,

  price: number,

  Title: string,

  Year : string,

  imdbID : string,

  Type : string,

  Poster : string

}


export interface AdminMovie{
  id: number,
  title: string,
  genre: string,
  characters: string,
  description: string,
  year: number,
  image: string
}

export interface Role {
  character: string;
  characterId?: string;
}

export interface Principal {
  id: string;
  name: string;
  legacyNameText: string;
  billing?: number;
  category: string;
  characters: string[];
  roles: Role[];
  as?: string;
  disambiguation?: any;
  startYear?: number;
  endYear?: number;
  episodeCount?: number;
}

export interface MovieImage {
  height: number;
  width: number;
  id: string;
  url: string;
}

export interface Movie {
  Search :MoviesApi[],

  totalResults : string,

  Response : string
}

export interface OnlyMovie {

  Actors: string,

  Awards: string,

  BoxOffice: string,

  Country: string,

  DVD: string,

  Director: string,

  Genre: string,

  Language: string,

  Metascore: string,

  Plot: string,

  Poster: string,

  Production: string,

  Rated: string,

  Ratings: Rating[],

  Released: string,

  Response: string,

  Runtime: string,

  Title: string,

  Type: string,

  Website: string,

  Writer: string,

  Year: string,

  imdbID: string,

  imdbRating: string,

  imdbVotes: string,

}



export interface Rating {

  Source: string,

  Value: string,

}
