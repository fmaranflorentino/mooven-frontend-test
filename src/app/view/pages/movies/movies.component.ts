import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { listStateTrigger } from 'src/app/shared/animations/animations';
import { ThemoviedbService } from './../../../data/services/themoviedb.service';
import {
  requestMoviesList,
  searchMovies,
  searchMoviesGenre
} from './../../../data/store/themoviedb.actions';
import {
  isLoading,
  moviesList
} from './../../../data/store/themoviedb.selectors';
import { fadeIn } from './../../../shared/animations/animations';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [listStateTrigger, fadeIn],
})
export class MoviesComponent implements OnInit {
  listLength = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  moviesList: any = [];
  isSearching = false;
  searchValue: any;
  genres: any;
  activeGenre: any;
  movies$ = this.store.pipe(select(moviesList));
  isLoading$ = this.store.select(isLoading);
  pageIndex = 1;

  constructor(
    private store: Store,
    private router: Router,
    private moviesdb: ThemoviedbService
  ) {}

  ngOnInit(): void {
    this.moviesdb.getAllGenders().subscribe((r: any) => {
      this.genres = r.genres;
    });
    this.store.dispatch(requestMoviesList({ page: this.pageIndex }));
  }

  handlePaginationChange(e: any) {
    this.pageIndex = e.pageIndex + 1;
    this.store.dispatch(requestMoviesList({ page: e.pageIndex + 1 }));
  }

  searchMovie(e: any) {
    this.activeGenre = null;
    this.searchValue = e.target.value;
    if (e.target.value.length > 3) {
      this.store.dispatch(searchMovies({ searchQuery: e.target.value }));
    }
  }

  handleSearchChange(e: any) {
    console.log(e.target.value);
  }

  resetSearch() {
    this.searchValue = '';
  }

  showMovieDetails(id: number) {
    this.router.navigate([`details/${id}`]);
  }

  searchByGenre(genreId: number) {
    this.activeGenre = genreId;
    this.store.dispatch(searchMoviesGenre({ genre: genreId }));
  }
}
