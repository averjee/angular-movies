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
      console.log("data.results", data.results);
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

    //send data
    this.moviedb.sendData(this.moviesData);
    
    this.router.navigate(["movie-detail", movieId]);
  }

  //options is now passed from filter to movies which then filters the movie data
  changeSelection(options) {
    console.log(options);

    this.moviedb.getMovieDiscover(options).subscribe((data: any) => {
      this.moviesData = data;
      this.movies = this.moviesData.results;
      console.log(this.movies);
    });
    
  }

}
