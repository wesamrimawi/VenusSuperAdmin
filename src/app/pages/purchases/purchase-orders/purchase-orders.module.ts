import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';
import { PurchaseOrdersComponent } from './purchase-orders.component';


@NgModule({
  declarations: [
    PurchaseOrdersComponent
  ],
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule
  ]
})
export class PurchaseOrdersModule { }
