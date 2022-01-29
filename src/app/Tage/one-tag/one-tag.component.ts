import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/__models/filter-model';

@Component({
  selector: 'app-one-tag',
  templateUrl: './one-tag.component.html',
  styleUrls: ['./one-tag.component.scss'],
})
export class OneTagComponent implements OnInit {
  @Input('TagArray') filter2!: Filter;

  constructor() {}

  ngOnInit(): void {}
}
