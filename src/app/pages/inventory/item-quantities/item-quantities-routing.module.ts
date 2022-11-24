import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemQuantitiesComponent } from './item-quantities.component';

const routes: Routes = [{ path: '', component: ItemQuantitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemQuantitiesRoutingModule { }
