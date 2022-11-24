import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseRefundsComponent } from './purchase-refunds.component';

const routes: Routes = [{ path: '', component: PurchaseRefundsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRefundsRoutingModule { }
