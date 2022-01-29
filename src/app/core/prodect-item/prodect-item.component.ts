import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ProdectServes } from 'src/app/_serviese/productServiese.serviese';
import { Prodect } from 'src/app/__models/prodect.model';

@Component({
  selector: 'app-prodect-item',
  templateUrl: './prodect-item.component.html',
  styleUrls: ['./prodect-item.component.scss'],
})
export class ProdectItemComponent implements OnInit {
  @Input('prodectItems') prodectitem!: Prodect;
  constructor(private prodectServes: ProdectServes) {}

  ngOnInit(): void {}

  getprice() {
    return this.prodectitem.discount
      ? this.prodectitem.price - this.prodectitem.discount
      : this.prodectitem.price;
  }
  delete(id: number | undefined) {
    this.prodectServes.deleteprodect(id);
    console.log(id);
    console.log(this.prodectitem);
    // console.log(this.prodectitem.length);
  }
  itemAdd() {
    this.prodectServes.itemAdd.emit(this.prodectitem);
  }
}
