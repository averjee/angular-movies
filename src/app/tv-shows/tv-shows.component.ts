import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  TVData: any;
  TVShows: any;
  title: string = "TV Shows";

  constructor(private moviedb: DataService, private router: Router) { }

  ngOnInit() {
    //an observable is the response from the http get request that needs to then be subscribed
    //subscribe is like a then in a promise
    this.moviedb.getTVShows('').subscribe(data => {
      this.TVData = data;
      this.TVShows = this.TVData.results;
      console.log(this.TVShows);
    });
  }

  searchTVShows(value: any){
    let tv: string = value.value;
    console.log(tv);

    this.moviedb.getTVShows(tv).subscribe((data: any) => {
      this.TVData = data;
      this.TVShows = this.TVData.results;
      console.log(this.TVShows);
    });
  }

  TVSelected(item: any) {
    let TVId: number;
    TVId = item.id;
    
    this.router.navigate(["tv-detail", TVId]);
  }

}
