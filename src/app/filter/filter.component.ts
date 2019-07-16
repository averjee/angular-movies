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
  }

  changeSelection() {
    this.filterChange.emit(this.options);
  }

}
