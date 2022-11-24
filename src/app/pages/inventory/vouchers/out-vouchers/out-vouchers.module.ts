import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutVouchersRoutingModule } from './out-vouchers-routing.module';
import { OutVouchersComponent } from './out-vouchers.component';


@NgModule({
  declarations: [
    OutVouchersComponent
  ],
  imports: [
    CommonModule,
    OutVouchersRoutingModule
  ]
})
export class OutVouchersModule { }
