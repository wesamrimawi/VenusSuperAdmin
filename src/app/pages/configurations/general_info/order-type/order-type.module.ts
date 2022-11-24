import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderTypeRoutingModule } from './order-type-routing.module';
import { OrderTypeComponent } from './order-type.component';
import { OrderTypeFormComponent } from './order-type-form/order-type-form.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [OrderTypeComponent, OrderTypeFormComponent],
  imports: [
    CommonModule,
    OrderTypeRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class OrderTypeModule { }
