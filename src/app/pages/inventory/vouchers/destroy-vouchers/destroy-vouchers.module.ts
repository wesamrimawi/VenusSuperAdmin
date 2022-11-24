import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestroyVouchersRoutingModule } from './destroy-vouchers-routing.module';
import { DestroyVouchersComponent } from './destroy-vouchers.component';


@NgModule({
  declarations: [
    DestroyVouchersComponent
  ],
  imports: [
    CommonModule,
    DestroyVouchersRoutingModule
  ]
})
export class DestroyVouchersModule { }
