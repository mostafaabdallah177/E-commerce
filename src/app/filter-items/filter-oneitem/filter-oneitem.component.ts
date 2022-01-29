import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/__models/filter-model';

@Component({
  selector: 'app-filter-oneitem',
  templateUrl: './filter-oneitem.component.html',
  styleUrls: ['./filter-oneitem.component.scss'],
})
export class FilterOneitemComponent implements OnInit {
  @Input('filteritem') filter!: Filter;
  constructor() {}

  ngOnInit(): void {
    console.log(this.filter);
  }
}
