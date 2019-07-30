import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  radios,
  color,
  date,
  button,
} from '@storybook/addon-knobs';

import { Welcome } from '@storybook/angular/demo';
import { MatToolbarModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatInputModule } from '@angular/material';
import { NavComponent } from '../app/nav/nav.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Navbar', module)
  .addDecorator(
    moduleMetadata({
        imports: [MatToolbarModule],
        declarations: [NavComponent]
    })
  )
  .add('Default', () => ({
    template: `
      <app-nav></app-nav>
    `
}));

// storiesOf('Filter', module)
//   .addDecorator(
//     moduleMetadata({
//         imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
//         declarations: [MoviesComponent, FilterComponent]
//     })
//   )
//   .add('Default', () => ({
//     template: `
//       <app-filter></app-filter>
//     `
// }));

const faker = require('faker');
let names = [];
let colors = [];

for(var i=0; i<20; i++) {
  names.push(faker.fake("{{name.firstName}}"));
  colors.push(faker.fake("{{commerce.color}}"));
}

console.log("names", names);
console.log("colors", colors);

let firstName = faker.name.firstName();
console.log(firstName);

let getYears = function() {
  const year = new Date().getFullYear();
  const yearList = [];
  for (let i = 0; i < 25; i++) {
    yearList.push(year - i);
  }
  return yearList;
}

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Year', () => ({
    template: `
    <div class="discover-filters center">
      <mat-form-field>
        <mat-select (change)="onChange($event)" [placeholder]="placeholder" [disabled]="disabled">
          <mat-option *ngFor="let year of years" [value]="year">
            {{ year }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    `,
    props: {
      years: getYears(),
      placeholder: text('placeholder', 'Year'),
      disabled: boolean('disabled', false),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatFormFieldModule, BrowserAnimationsModule, MatSelectModule]
    }
  }));

  storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Sort By', () => ({
    template: `
    <div class="discover-filters center">
      <mat-form-field>
        <mat-select (change)="onChange($event)" [placeholder]="placeholder" [disabled]="disabled">
          <mat-option *ngFor="let sort of sortList" [value]="sort">
            {{ sort }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    `,
    props: {
      sortList: colors,
      // sortList: array('sortList', [
      //   'Popularity Descending',
      //   'Popularity Ascending',
      //   'Rating Ascending',
      //   'Rating Descending',
      //   'Release Date Descending',
      //   'Release Date Ascending'
      // ]),
      placeholder: text('placeholder', 'Sort By'),
      disabled: boolean('disabled', false),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatFormFieldModule, BrowserAnimationsModule, MatSelectModule]
    }
  }));

  storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Genres', () => ({
    template: `
    <div class="discover-filters center">
      <mat-form-field>
        <mat-select multiple (change)="onChange($event)" [placeholder]="placeholder" [disabled]="disabled">
          <mat-option *ngFor="let genre of genreList" [value]="genre">
            {{ genre }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    `,
    props: {
      genreList: names,
      // genreList: array('genreList', [
      //   'Action',
      //   'Adventure',
      //   'Animation',
      //   'Comedy',
      //   'Crime',
      //   'Documentary',
      //   'Drama',
      //   'Family',
      //   'Fantasy',
      //   'History',
      //   'Horror',
      //   'Music',
      //   'Mystery',
      //   'Romance',
      //   'Science Fiction',
      //   'TV Movie',
      //   'Thriller',
      //   'War',
      //   'Western'
      // ]),
      placeholder: text('placeholder', 'Genres'),
      disabled: boolean('disabled', false),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatFormFieldModule, BrowserAnimationsModule, MatSelectModule]
    }
  }));

  storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      imports: [MatButtonModule],
    })
  )
  .add('Clear Filters', () => ({
    template: `
    <div class="discover-filters center">
      <button id="clear-filters" class="center" (click)="clearFilters()" mat-raised-button>Clear Filters</button>
    </div>
    `,
    props: {
      clearFilters: (event: any) => {
        console.log('clear filters works');
      },
    },
  }));

  storiesOf('Search', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    template: `
    <div id="search" class="center">
      <mat-form-field class="center" hideRequiredMarker floatLabel='auto' appearance='legacy'>
        <mat-label>Search Movie...</mat-label>
        <input #input required matInput (keyup)="searchMovies(input)">
      </mat-form-field>
    </div>
    `,
    props: {
      searchMovies: (input: any) => {
        console.log(input.value);
      },
    },
    moduleMetadata: {
      imports: [MatFormFieldModule, BrowserAnimationsModule, MatSelectModule, MatInputModule]
    }
  }));



