import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveVouchersRoutingModule } from './receive-vouchers-routing.module';
import { ReceiveVouchersComponent } from './receive-vouchers.component';


@NgModule({
  declarations: [
    ReceiveVouchersComponent
  ],
  imports: [
    CommonModule,
    ReceiveVouchersRoutingModule
  ]
})
export class ReceiveVouchersModule { }
