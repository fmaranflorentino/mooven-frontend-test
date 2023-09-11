import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'details/:id',
    pathMatch: 'full',
    loadChildren: () =>
      import('./view/pages/details/details.module').then(
        (m) => m.DetailsModule
      ),
  },
  {
    path: 'movies',
    pathMatch: 'full',
    loadChildren: () =>
      import('./view/pages/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '**',
    redirectTo: 'movies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
