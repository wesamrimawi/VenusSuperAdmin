import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { CouponsComponent } from './coupons.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';

import { SharedModule } from '../../shared/shared.module';
import { CouponsFormComponent } from './coupons-form/coupons-form.component';

@NgModule({
  declarations: [
    CouponsComponent,
    CouponsFormComponent
  ],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class CouponsModule { }
