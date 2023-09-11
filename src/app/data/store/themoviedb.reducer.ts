import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {
  loadMoviesList,
  requestMoviesList,
  incrementFavList,
  decrementFavList,
  searchMovies,
  searchMoviesGenre,
} from './themoviedb.actions';

export const initialState: any = {
  movies: [],
  isLoading: false,
  favLength: 0,
};

export const moviesReducer = createReducer(
  initialState,
  on(requestMoviesList, (state, action) => {
    return { ...state, isLoading: true };
  }),
  on(searchMovies, (state, action) => {
    return { ...state, isLoading: true };
  }),
  on(searchMoviesGenre, (state, action) => {
    return { ...state, isLoading: true };
  }),
  on(loadMoviesList, (state, { list }) => {
    return { ...state, movies: list, isLoading: false };
  }),
  on(incrementFavList, (_, { favLength }) => {
    return { ...state, favLength };
  }),
  on(decrementFavList, (_, { favLength }) => {
    return { ...state, favLength };
  })
);

export const selectIsLoading = (state: any) => state.isLoading;
export const selectMoviesList = (state: any) => state.movies;
export const selectFavLength = (state: any) => state.favLength;
