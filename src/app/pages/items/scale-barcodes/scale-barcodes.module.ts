import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScaleBarcodesRoutingModule } from './scale-barcodes-routing.module';
import { ScaleBarcodesComponent } from './scale-barcodes.component';
import { SharedModule } from '../../../shared/shared.module';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { ScaleBarcodeFormComponent } from './sacle-barcode-form/scale-barcode-form.component';
@NgModule({
  declarations: [
    ScaleBarcodesComponent,
    ScaleBarcodeFormComponent
  ],
  imports: [
    CommonModule,
    ScaleBarcodesRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class ScaleBarcodesModule { }
