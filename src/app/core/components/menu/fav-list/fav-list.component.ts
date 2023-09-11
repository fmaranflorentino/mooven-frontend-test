import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss']
})
export class FavListComponent implements OnInit {
  favList: any;

  constructor(private router: Router,
    private _bottomSheetRef: MatBottomSheetRef<FavListComponent>
    ) { }

  ngOnInit(): void {
    const favList = localStorage.getItem('favList');

    if (favList) {
      this.favList = JSON.parse(favList);
    }
  }

  showMovieDetails(movieId:any) {
    this._bottomSheetRef.dismiss();
    this.router.navigate(['details/' + movieId])
  }

}
