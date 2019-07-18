import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<any>();
  options: any;
  yearsList: Number[];
  sortByList: any;
  genresList: any;

  constructor(public moviedb: DataService) {
    this.moviedb.getMovieGenres().subscribe(
      (res: any) => (this.genresList = res.genres)
    );
    this.options = {};
  }

  ngOnInit() {
    this.yearsList = this.moviedb.getYears();
    this.sortByList = this.moviedb.sortByList();

    this.moviedb.getMovieGenres().subscribe((data: any) => {
      //genresList is then used in html form to loop through names in multi select and store id value
      this.genresList = data.genres;
      console.log("this.genresList", this.genresList);
    });
    
    console.log("yearsList", this.yearsList);
    console.log("sortByList", this.sortByList);
  }

  changeSelection() {
    //every time there is a selection change in html form, the change is stored in this.options as options.with_genres if it's genre
    //where the values are stored as ids e.g. genre.id
    //all selection boxes use this same changeSelection function and so all changes are stored in options
    //options is then emitted to parent movies html via (filterChange) event within movies.component.html
    this.filterChange.emit(this.options);
    console.log("this.options", this.options);
  }

}
