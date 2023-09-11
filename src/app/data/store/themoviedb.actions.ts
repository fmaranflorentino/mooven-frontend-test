import { createAction, props } from '@ngrx/store';

export const requestMoviesList = createAction(
  '[Movies API] Request Fetch API',
  props<{ page: any }>()
);

export const loadMoviesList = createAction(
  '[Movies API] Load API Success',
  props<{ list: any[] }>()
);

export const searchMovies = createAction(
    '[Movies API] Search API',
    props<{ searchQuery: string }>()
  );

  export const searchMoviesGenre = createAction(
    '[Movies API] Search genre API',
    props<{ genre: any }>()
  );

export const incrementFavList = createAction(
    '[Fav list] Add fav movie',
    props<{ favLength: any }>()
  );

  export const decrementFavList = createAction(
    '[Fav list] Remove fav movie',
    props<{ favLength: any }>()
  );
  