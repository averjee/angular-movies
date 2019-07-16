import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tmdbURL: string = 'https://api.themoviedb.org';
  apiKey: string = 'd0aea524bd07ed49cbc26dff63f357dd';

  constructor(private http: HttpClient) { }

  //movies services
  getMovies(value: string) {
    if (value) {
      return this.http.get(this.tmdbURL + '/3/search/movie?api_key=' + this.apiKey + '&language=en-US&query=' + value);
    } else {
      return this.http.get(this.tmdbURL + '/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1');
    }
  }

  getMovieDetail(movieId: number) {
    return this.http.get(this.tmdbURL + '/3/movie/' + movieId + '?api_key=' + this.apiKey);
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
