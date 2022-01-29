import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/__models/filter-model';

@Component({
  selector: 'app-tage',
  templateUrl: './tage.component.html',
  styleUrls: ['./tage.component.scss'],
})
export class TageComponent implements OnInit {
  tagArray!: Filter[];

  constructor() {
    this.tagArray = [
      {
        titel: 'Nike',
      },
      {
        titel: 'Travel',
      },
      {
        titel: 'Sport',
      },
      {
        titel: 'TV',
      },
      {
        titel: 'Books',
      },
      {
        titel: 'Tech',
      },
      {
        titel: 'Addidas',
      },
      {
        titel: 'Promo',
      },
      {
        titel: 'Reading',
      },
      {
        titel: 'Social',
      },
      {
        titel: 'New',
      },
      {
        titel: 'Special',
      },
      {
        titel: 'FooD',
      },
      {
        titel: 'USed',
      },
    ];
  }

  ngOnInit(): void {}
}
