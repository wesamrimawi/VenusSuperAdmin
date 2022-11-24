import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRefundsRoutingModule } from './purchase-refunds-routing.module';
import { PurchaseRefundsComponent } from './purchase-refunds.component';


@NgModule({
  declarations: [
    PurchaseRefundsComponent
  ],
  imports: [
    CommonModule,
    PurchaseRefundsRoutingModule
  ]
})
export class PurchaseRefundsModule { }
