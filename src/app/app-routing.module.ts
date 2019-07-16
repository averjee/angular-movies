import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "movie-detail", component: MovieDetailComponent },
  { path: "movie-detail/:id", component: MovieDetailComponent },
  { path: "tv-shows", component: TvShowsComponent },
  { path: "tv-detail/:id", component: TvDetailComponent },
  { path: "people", component: PeopleComponent },
  { path: "person-detail/:id", component: PersonDetailComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
