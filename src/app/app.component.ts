import { Component } from '@angular/core';
import { Prodect } from 'src/app/__models/prodect.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  prodectitem: Prodect[] = [];
  buttenClick = 'add-listing ';

  title = 'Day2';
}
