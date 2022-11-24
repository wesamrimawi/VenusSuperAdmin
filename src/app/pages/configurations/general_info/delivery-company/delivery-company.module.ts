import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryCompanyRoutingModule } from './delivery-company-routing.module';
import { DeliveryCompanyComponent } from './delivery-company.component';
import { DeliveryCompanyFormComponent } from './delivery-company-form/delivery-company-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
@NgModule({
  declarations: [DeliveryCompanyComponent, DeliveryCompanyFormComponent],
  imports: [
    CommonModule,
    DeliveryCompanyRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class DeliveryCompanyModule { }
