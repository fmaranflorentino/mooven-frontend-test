import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieCardListComponent } from './components/movie-card-list/movie-card-list.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieCardListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [MovieCardComponent, MovieCardListComponent]
})
export class SharedModule { }
