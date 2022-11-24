import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceListsComponent } from './price-lists.component';

const routes: Routes = [{ path: '', component: PriceListsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceListsRoutingModule { }
