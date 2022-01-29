import { Component, Input, OnInit } from '@angular/core';
import { ProdectServes } from 'src/app/_serviese/productServiese.serviese';
import { Prodect } from 'src/app/__models/prodect.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  AddItems: Prodect[] = [];

  constructor(private prodectServes: ProdectServes) {}

  ngOnInit(): void {
    this.prodectServes.itemAdd.subscribe(
      (next) => {
        console.log(next);
        this.AddItems.push(next);
      },
      (error) => {},
      () => {}
    );
  }
}
