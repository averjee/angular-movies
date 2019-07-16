import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  person: any = {};
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private moviedb: DataService) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: number = parseInt(params.get('id'));
      this.id = id;
      console.log(this.id);
    });

    this.moviedb.getPersonDetail(this.id).subscribe(data => {
      this.person = data;
      console.log(this.person)
    });

  }

  goBack() {
    this.router.navigate(['/people']);
  }

}
