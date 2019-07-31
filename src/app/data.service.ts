import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class ResultAPI{
  page:number; 
	total_results: number;
	total_pages: number;
}

export class MovieDetailsResponse extends ResultAPI{
  results: Array<MovieDetails>;
}

export class MovieDetails{
  id:number;
  title:string;
  popularity:number;
  video: boolean;
  original_title: string;
  genre_ids?: Array<number>;
}

export class MovieDetail extends MovieDetails{
  vote_average:number;
  runtime:number;
  overview:string;
}


// {
// 	"vote_count": 1160,
// 	"id": 420818,
// 	"video": false,
// 	"vote_average": 7.2,
// 	"title": "The Lion King",
// 	"popularity": 425.026,
// 	"poster_path": "\/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
// 	"original_language": "en",
// 	"original_title": "The Lion King",
// 	"genre_ids": [12, 16, 10751, 18, 28],
// 	"backdrop_path": "\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
// 	"adult": false,
// 	"overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
// 	"release_date": "2019-07-12"
// }


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tmdbURL: string = 'https://api.themoviedb.org';
  apiKey: string = 'd0aea524bd07ed49cbc26dff63f357dd';

  constructor(private http: HttpClient) { }

  //movies services
  getMovies(value: string) : Observable<MovieDetailsResponse> {
    if (value) {
      return this.http.get<MovieDetailsResponse>(this.tmdbURL + '/3/search/movie?api_key=' + this.apiKey + '&language=en-US&query=' + value);
    } else {
      return this.http.get<MovieDetailsResponse>(this.tmdbURL + '/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1');
    }
  }

  

  getMovieDetail(movieId: number) : Observable<MovieDetail> {
    return this.http.get<MovieDetail>(this.tmdbURL + '/3/movie/' + movieId + '?api_key=' + this.apiKey);
  }

  getMovieGenres(){
    return this.http.get(this.tmdbURL + '/3/genre/movie/list' + '?api_key=' + this.apiKey + '&language=en-US');
  }

  getMovieDiscover(options){
    console.log(options);
    let param: string = '';
    
    if (options.with_genres){
      param += '&with_genres=' + options.with_genres.join();
    } 
    
    if (options.sort_by){
      param += '&sort_by=' + options.sort_by;
    } 
    
    if (options.primary_release_year){
      param += '&primary_release_date.gte=' + options.primary_release_year + '&primary_release_date.lte=' + parseInt(options.primary_release_year + 1);
    }

    console.log(param);

    return this.http.get(this.tmdbURL + '/3/discover/movie' + '?api_key=' + this.apiKey + '&language=en-US' + param);
  }

  sortByList(): Array<any> {
    return [
      { key: 'popularity.desc', value: 'Popularity Descending' },
      { key: 'popularity.asc', value: 'Popularity Ascending' },
      { key: 'vote_count.asc', value: 'Rating Ascending' },
      { key: 'vote_count.desc', value: 'Rating Descending' },
      { key: 'primary_release_date.desc', value: 'Release Date Descending' },
      { key: 'primary_release_date.asc', value: 'Release Date Ascending' }
    ];
  }

  getYears(): Array<number> {
    const year = new Date().getFullYear();
    const yearList = [];
    for (let i = 0; i < 25; i++) {
      yearList.push(year - i);
    }
    return yearList;
  }

  //tv shows services
  getTVShows(value: string) {
    if (value) {
      return this.http.get(this.tmdbURL + '/3/search/tv?api_key=' + this.apiKey + '&language=en-US&query=' + value);
    } else {
      return this.http.get(this.tmdbURL + '/3/tv/popular?api_key=' + this.apiKey + '&language=en-US&page=1');
    }
  }

  getTVDetail(tvId: number) {
    return this.http.get(this.tmdbURL + '/3/tv/' + tvId + '?api_key=' + this.apiKey);
  }

  //people services
  getPeople(value: string) {
    if (value) {
      return this.http.get(this.tmdbURL + '/3/search/person?api_key=' + this.apiKey + '&language=en-US&query=' + value);
    } else {
      return this.http.get(this.tmdbURL + '/3/person/popular?api_key=' + this.apiKey + '&language=en-US&page=1');
    }
  }

  getPersonDetail(personId: number) {
    return this.http.get(this.tmdbURL + '/3/person/' + personId + '?api_key=' + this.apiKey);
  }

}
