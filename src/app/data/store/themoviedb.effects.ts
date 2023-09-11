import { ThemoviedbService } from './../services/themoviedb.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, debounceTime, delay } from 'rxjs/operators';
import { loadMoviesList, requestMoviesList, searchMovies, searchMoviesGenre } from './themoviedb.actions';


@Injectable()
export class MoviesEffects {

  constructor(private actions$: Actions, private service: ThemoviedbService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestMoviesList),
      switchMap(action =>
        this.service.getMoviesList('now_playing', action.page).pipe(
          delay(3000),
          map((data: any) => loadMoviesList({list: data.results}))
      ))
    )
  );

  searchMovies$ = createEffect(() =>
      this.actions$.pipe(
        ofType(searchMovies),
        switchMap(action => this.service.getMoviesByKeyword(action.searchQuery)
        .pipe(
          delay(1000),
          map((data: any) => loadMoviesList({list: data.results}))
        ))
      )
  );

  searchMoviesGenre$ = createEffect(() =>
      this.actions$.pipe(
        ofType(searchMoviesGenre),
        switchMap(action => this.service.getMoviesByGender(action.genre)
        .pipe(
          delay(1000),
          map((data: any) => loadMoviesList({list: data.results}))
        ))
      )
  );
}
