import { FavListComponent } from './fav-list/fav-list.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { incrementFavList } from 'src/app/data/store/themoviedb.actions';
import { favLength } from 'src/app/data/store/themoviedb.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  favCount: number = 0;
  favCount$ = this.store.select(favLength);
  constructor(
    private router: Router,
    private _bottomSheet: MatBottomSheet,
    private store: Store
  ) {
    const favList = localStorage.getItem('favList');

    if (favList) {
      const tt = JSON.parse(favList);
      this.store.dispatch(incrementFavList({ favLength: tt.length }));
    }
  }

  ngOnInit(): void {
    const favList = localStorage.getItem('favList');

    if (favList) {
      this.favCount = JSON.parse(favList).length;
    }

    console.log(this.favCount);
  }

  teste() {
    // this.router.navigate(['movies']);

    this._bottomSheet.open(FavListComponent);
  }
}
