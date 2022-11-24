import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRequestsRoutingModule } from './purchase-requests-routing.module';
import { PurchaseRequestsComponent } from './purchase-requests.component';


@NgModule({
  declarations: [
    PurchaseRequestsComponent
  ],
  imports: [
    CommonModule,
    PurchaseRequestsRoutingModule
  ]
})
export class PurchaseRequestsModule { }
