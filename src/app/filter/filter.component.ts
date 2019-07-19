import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;
  @Output() filterChange = new EventEmitter<any>();
  options: any;
  yearsList: Number[];
  sortByList: any;
  genresList: any;

  constructor(public moviedb: DataService, private fb: FormBuilder) {}

  ngOnInit() {

    //check to see if options is stored in localstorage already and then set it to localstorage
    //otherwise set it to {}
    if (JSON.parse(localStorage.getItem('options'))){
      this.options = JSON.parse(localStorage.getItem('options'));
      this.filterChange.emit(this.options);
    }else{
      this.options = {};
    }

    this.yearsList = this.moviedb.getYears();
    this.sortByList = this.moviedb.sortByList();

    this.moviedb.getMovieGenres().subscribe((data: any) => {
      //genresList is then used in html form to loop through names in multi select and store id value
      this.genresList = data.genres;
      console.log("this.genresList", this.genresList);
    });
    
    console.log("yearsList", this.yearsList);
    console.log("sortByList", this.sortByList);

    //the yearCategory, sortCategory and genreCategory gets automatically stored into filterForm
    //via this.options
    this.filterForm = this.fb.group({
      yearCategory: [null],
      sortCategory: [null],
      genreCategory: [null]
		});

    //this.filterForm.get('yearCategory').setValue(this.options.primary_release_year);
  }

  changeSelection() {
    //every time there is a selection change in html form, the change is stored in this.options as options.with_genres if it's genre
    //where the values are stored as ids e.g. genre.id
    //all selection boxes use this same changeSelection function and so all changes are stored in options
    //options is then emitted to parent movies html via (filterChange) event within movies.component.html
    this.filterChange.emit(this.options);
    console.log("this.options", this.options);

    //store this.options into localstorage
    localStorage.setItem('options', JSON.stringify(this.options));

  }

  clearFilters(){
    this.options = {};
    this.filterChange.emit(this.options);
    localStorage.setItem('options', JSON.stringify(this.options));
  }

}
