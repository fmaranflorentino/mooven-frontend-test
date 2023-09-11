import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemoviedbService {
  constructor(private http: HttpClient) {}

  getMoviesList(listType: string, page: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${listType}?language=en-US&page=${page}`
    );
  }

  getMoviebyId(movieId: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    );
  }

  getMoviesByKeyword(keyWord: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyWord}&include_adult=false&language=en-US&page=1`
    );
  }

  getRecommendationsMovies(movieId: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`
    );
  }

  getMovieVideo(movieId: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
    );
  }

  getAllGenders() {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list`);
  }

  getMoviesByGender(genderId: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genderId}`
    );
  }
}
