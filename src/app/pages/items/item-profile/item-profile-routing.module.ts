import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemProfileComponent } from './item-profile.component';

const routes: Routes = [{ path: '', component: ItemProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemProfileRoutingModule { }
