import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  imgUrl: any;
  constructor() { }

  ngOnInit(): void {
    this.imgUrl = this.movie.poster_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.movie.poster_path}` : 'assets/img/no-ing.jpg';
  }

}
