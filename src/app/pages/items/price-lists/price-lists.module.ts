import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceListsRoutingModule } from './price-lists-routing.module';
import { PriceListsComponent } from './price-lists.component';
import { PriceListsFormComponent } from './price-lists-form/price-lists-form.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [
    PriceListsComponent,
    PriceListsFormComponent
  ],
  imports: [
    CommonModule,
    PriceListsRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class PriceListsModule { }
