import { ProdectComponent } from './core/prodect/prodect.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProdectComponent } from './add-prodect/add-prodect.component';

const routes: Routes = [
  { path: '', component: ProdectComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'add-prodect', component: AddProdectComponent },
  // { path: '**', component: AddProdectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
