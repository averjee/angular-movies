import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  peopleData: any;
  people: any;
  title: string = "People";

  constructor(private moviedb: DataService, private router: Router) { }

  ngOnInit() {
    this.moviedb.getPeople('').subscribe(data => {
      this.peopleData = data;
      this.people = this.peopleData.results;
      console.log(this.people);
    });
  }

  searchPeople(value: any){
    let person: string = value.value;
    console.log(person);

    this.moviedb.getPeople(person).subscribe((data: any) => {
      this.peopleData = data;
      this.people = this.peopleData.results;
      console.log(this.people);
    });
  }

  personSelected(item: any) {
    let personId: number;
    personId = item.id;
    
    this.router.navigate(["person-detail", personId]);
  }

}
