import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryVouchersRoutingModule } from './entry-vouchers-routing.module';
import { EntryVouchersComponent } from './entry-vouchers.component';


@NgModule({
  declarations: [
    EntryVouchersComponent
  ],
  imports: [
    CommonModule,
    EntryVouchersRoutingModule
  ]
})
export class EntryVouchersModule { }
