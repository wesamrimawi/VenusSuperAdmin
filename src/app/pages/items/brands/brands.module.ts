import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from '../../../shared/shared.module';
import { BrandFormComponent } from './brand-form/brand-form.component';
@NgModule({
  declarations: [
    BrandsComponent,
    BrandFormComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class BrandsModule { }
