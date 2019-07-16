import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {

  TV: any = {};
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private moviedb: DataService) {}

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: number = parseInt(params.get('id'));
      this.id = id;
      console.log(this.id);
    });

    this.moviedb.getTVDetail(this.id).subscribe(data => {
      this.TV = data;
      console.log(this.TV)
    });

  }

  goBack() {
    this.router.navigate(['/tv-shows']);
  }

}
