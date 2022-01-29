import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.scss'],
})
export class DropListComponent implements OnInit {
  cartOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
