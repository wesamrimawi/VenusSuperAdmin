import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferVouchersRoutingModule } from './transfer-vouchers-routing.module';
import { TransferVouchersComponent } from './transfer-vouchers.component';


@NgModule({
  declarations: [
    TransferVouchersComponent
  ],
  imports: [
    CommonModule,
    TransferVouchersRoutingModule
  ]
})
export class TransferVouchersModule { }
