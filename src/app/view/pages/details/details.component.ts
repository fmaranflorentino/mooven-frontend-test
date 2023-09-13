import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ThemoviedbService } from 'src/app/data/services/themoviedb.service';
import {
  decrementFavList,
  incrementFavList,
} from './../../../data/store/themoviedb.actions';
import { fadeIn } from './../../../shared/animations/animations';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [fadeIn],
})
export class DetailsComponent implements OnInit {
  f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
  movieId: any;
  movieDetails: any;
  recoList = [];
  videoUrl: any;
  isFav = false;
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private moviesdb: ThemoviedbService,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.movieId = params?.id;

      this.moviesdb.getMoviebyId(this.movieId).subscribe((r) => {
        this.movieDetails = r;

        const favList = localStorage.getItem('favList');

        if (favList) {
          const parsedfavList = JSON.parse(favList).filter((movie: any) => {
            if (movie.id === this.movieDetails.id) {
              return movie;
            }
          });

          this.isFav = parsedfavList.length;
        }
      });

      this.getRecommendMovies();
      this.getMovieTrailer();
    });
  }

  getFormattedDate(date: string) {
    const formattedDate = new Date(date);

    return formattedDate.toLocaleString('pt-BR', { timeZone: 'UTC' })
  }

  getPostUrl() {
    return `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.movieDetails?.poster_path}`;
  }

  getBackUrl() {
    return `background-image: url(https://image.tmdb.org/t/p/w1280/${this.movieDetails?.backdrop_path})`;
  }

  getRecommendMovies() {
    this.moviesdb.getRecommendationsMovies(this.movieId).subscribe((r: any) => {
      this.recoList = r?.results;
    });
  }

  getMovieTrailer() {
    this.moviesdb.getMovieVideo(this.movieId).subscribe((r: any) => {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${r.results[0].key}?rel=0;&autoplay=1&mute=1`
      );
    });
  }

  openTrailerModal() {
    this.dialog.open(ModalVideoComponent, {
      width: '600px',
      height: '600px',
      data: {
        url: this.videoUrl,
      },
    });
  }

  addMovieToFav(movie: any) {
    const favList = localStorage.getItem('favList');

    if (favList) {
      const parsedfavList = JSON.parse(favList);
      parsedfavList.push(movie);
      localStorage.setItem('favList', JSON.stringify(parsedfavList));
      this.isFav = true;
      this.store.dispatch(
        incrementFavList({ favLength: parsedfavList.length })
      );

      return;
    }
    this.store.dispatch(incrementFavList({ favLength: 1 }));

    localStorage.setItem('favList', JSON.stringify([movie]));
    this.isFav = true;
  }

  removeMovieFromFav(movie: any) {
    const favList = localStorage.getItem('favList');

    if (favList) {
      const parsedFavList = JSON.parse(favList).filter((movie: any) => {
        if (movie.id === this.movieDetails.id) {
          return;
        }
        return movie;
      });

      this.isFav = false;
      localStorage.setItem('favList', JSON.stringify(parsedFavList));
      this.store.dispatch(decrementFavList({ favLength: parsedFavList.length }));
    }
  }

  showMovieDetails(movie: any) {
    this.router.navigate([`details/${movie.id}`]);
  }
}
