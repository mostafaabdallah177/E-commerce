import { ProdectServes } from 'src/app/_serviese/productServiese.serviese';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProdectComponent } from './core/prodect/prodect.component';
import { ProdectItemComponent } from './core/prodect-item/prodect-item.component';
import { FilterListComponent } from './filter-items/filter-list/filter-list.component';
import { FilterOneitemComponent } from './filter-items/filter-oneitem/filter-oneitem.component';
import { OneTagComponent } from './Tage/one-tag/one-tag.component';
import { TageComponent } from './Tage/TagList/tage.component';
import { DropListComponent } from './Shared/drop-list/drop-list.component';
import { AddProdectComponent } from './add-prodect/add-prodect.component';
import { PaymenttypesComponent } from './Shared/paymenttypes/paymenttypes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdectComponent,
    ProdectItemComponent,
    FilterListComponent,
    FilterOneitemComponent,
    OneTagComponent,
    TageComponent,
    DropListComponent,
    AddProdectComponent,
    PaymenttypesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProdectServes],
  bootstrap: [AppComponent],
})
export class AppModule {}
