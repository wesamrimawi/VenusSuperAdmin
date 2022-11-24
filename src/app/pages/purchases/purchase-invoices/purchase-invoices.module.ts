import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseInvoicesRoutingModule } from './purchase-invoices-routing.module';
import { PurchaseInvoicesComponent } from './purchase-invoices.component';


@NgModule({
  declarations: [
    PurchaseInvoicesComponent
  ],
  imports: [
    CommonModule,
    PurchaseInvoicesRoutingModule
  ]
})
export class PurchaseInvoicesModule { }
