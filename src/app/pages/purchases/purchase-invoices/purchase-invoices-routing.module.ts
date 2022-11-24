import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseInvoicesComponent } from './purchase-invoices.component';

const routes: Routes = [{ path: '', component: PurchaseInvoicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseInvoicesRoutingModule { }
