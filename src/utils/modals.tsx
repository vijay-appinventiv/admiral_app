class Movie {
  id: number = 0;
  title: string = "";
  overview: string = "";
  adult: boolean = false;
  video: boolean = false;
  popularity: number = 0;
  vote_count: number = 0;
  poster_path: string = "";
  release_date: string = "";
  vote_average: number = 0;
  backdrop_path: string = "";
  original_title: string = "";
  genre_ids: Array<number> = [];
  original_language: string = "";
}

class genre {
  id: number = 0;
  name: string = '';
}

class MoviesList {
  page: number = 1;
  total_pages: number = 0;
  loading: boolean = false;
  genres_list: genre[] = [];
  movies_data: Movie[] = [];
}

class ReducersModal {
  moviesReducer: MoviesList = new MoviesList()
}

export {
  genre,
  Movie,
  MoviesList,
  ReducersModal
}