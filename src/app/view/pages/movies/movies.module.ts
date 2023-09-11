import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MoviesEffects } from 'src/app/data/store/themoviedb.effects';
import { moviesReducer } from 'src/app/data/store/themoviedb.reducer';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    SharedModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule,
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
})
export class MoviesModule {}
