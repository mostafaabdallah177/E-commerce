import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/__models/filter-model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent implements OnInit {
  filterArray: Filter[];
  constructor() {
    this.filterArray = [
      {
        titel: 'Arts & Crafts',
      },
      {
        titel: 'Automotive',
      },
      {
        titel: 'Baby',
      },
      {
        titel: 'Books',
      },
      {
        titel: 'Eletronics',
      },
      {
        titel: 'Women s Fashion',
      },
      {
        titel: 'Men s Fashion',
      },
      {
        titel: 'Health & Household',
      },
      {
        titel: 'Home & Kitchen',
      },
      {
        titel: 'Military Accessories',
      },
      {
        titel: 'Sports & Outdoors',
      },
      {
        titel: 'Tools & Home Improvement',
      },
      {
        titel: 'Toys & Games',
      },
    ];
  }
  ngOnInit(): void {
    console.log(this.filterArray);
  }
}
