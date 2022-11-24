import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRolesRoutingModule } from './delivery-roles-routing.module';
import { DeliveryRolesComponent } from './delivery-roles.component';
import { DeliveryRolesFormComponent } from './delivery-roles-form/delivery-roles-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
@NgModule({
  declarations: [DeliveryRolesComponent, DeliveryRolesFormComponent],
  imports: [
    CommonModule,
    DeliveryRolesRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class DeliveryRolesModule { }
