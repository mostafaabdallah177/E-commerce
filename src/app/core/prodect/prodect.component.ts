import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProdectServes } from 'src/app/_serviese/productServiese.serviese';
import { Prodect } from 'src/app/__models/prodect.model';

@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.scss'],
})
export class ProdectComponent implements OnInit {
  @Input() ProudectArray!: Prodect[];
  @Input() numberOfItemInonePage: number = 9;

  proudectArrayToView: Prodect[] = [];
  NOfPagesArray: number[] = [];
  currentPage: number = 0;
  // prodectServes = new ProdectServes();
  constructor(private prodectServes: ProdectServes) {}

  ngOnInit(): void {
    this.ProudectArray = this.prodectServes.getallProdect();
    const numberPages = Math.ceil(
      this.ProudectArray.length / this.numberOfItemInonePage
    );
    this.prodectServes.deletitem.subscribe(
      (next) => {
        this.ProudectArray = next;
        this.ArraySlice();
      },
      (error) => {},

      () => {}
    );

    this.ArraySlice();
    this.number();
  }

  number() {
    this.NOfPagesArray = [];
    const numberPages = Math.ceil(
      this.ProudectArray.length / this.numberOfItemInonePage
    );
    for (let index = 0; index < numberPages; index++) {
      this.NOfPagesArray.push(index + 1);
    }
  }
  newItemAdded(prodectitem: Prodect) {}
  ArraySlice() {
    this.proudectArrayToView = this.ProudectArray.slice(
      this.currentPage * this.numberOfItemInonePage,
      this.currentPage * this.numberOfItemInonePage + this.numberOfItemInonePage
    );
  }
  OnPagention(i: number) {
    this.currentPage = i;
    this.ArraySlice();
  }
}
