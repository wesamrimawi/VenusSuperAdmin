import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppOrdersComponent } from './app-orders.component';

const routes: Routes = [{ path: '', component: AppOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOrdersRoutingModule { }
