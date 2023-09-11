import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectIsLoading, selectMoviesList, selectFavLength } from './themoviedb.reducer';

export const selectMovies = createFeatureSelector<any[]>('movies');
export const isLoading = createSelector(selectMovies, selectIsLoading);
export const moviesList = createSelector(selectMovies, selectMoviesList);
export const favLength = createSelector(selectMovies, selectFavLength);
