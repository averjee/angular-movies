import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesData: any;
  movies: any;
  title: string = "Movies";

  constructor(private moviedb: DataService, private router: Router) { }

  ngOnInit() {
    //an observable is the response from the http get request that needs to then be subscribed
    //subscribe is like a then in a promise
    this.moviedb.getMovies('').subscribe(data => {
      this.moviesData = data;
      this.movies = this.moviesData.results;
      console.log(this.movies);
    });
  }

  searchMovies(value: any){
    let movie: string = value.value;
    console.log(movie);

    this.moviedb.getMovies(movie).subscribe((data: any) => {
      this.moviesData = data;
      this.movies = this.moviesData.results;
      console.log(this.movies);
    });
  }

  movieSelected(item: any) {
    let movieId: number;
    movieId = item.id;
    
    this.router.navigate(["movie-detail", movieId]);
  }

  

}
