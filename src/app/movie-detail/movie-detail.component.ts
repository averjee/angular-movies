import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: any = {};
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private moviedb: DataService) {}

  ngOnInit() {

    //since movie id was passed through via movieSelected function within movies.component.ts
    //via navigation which is setup in the app-routing.module.ts, this id is then stored in the 
    //params of the route which then can be extracted so you can then call the getDetail method 
    //stored in the moviedb data service
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: number = parseInt(params.get('id'));
      this.id = id;
      console.log(this.id);
    });

    this.moviedb.getMovieDetail(this.id).subscribe(data => {
      this.movie = data;
      console.log(this.movie)
    });

  }

  goBack() {
    this.router.navigate(['/movies']);
  }
  

}
