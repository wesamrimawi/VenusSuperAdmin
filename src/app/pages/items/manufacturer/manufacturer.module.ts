import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturerFormComponent } from './manufacturer-form/manufacturer-form.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from '../../../shared/shared.module';
import { ManufacturerComponent } from './manufacturer.component';
import { ManufacturerRoutingModule } from './manufacturer-routing.module';

@NgModule({
  declarations: [
    ManufacturerComponent,
    ManufacturerFormComponent
  ],
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class  ManufacturerModule { }
