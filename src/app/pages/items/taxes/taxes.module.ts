import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxesRoutingModule } from './taxes-routing.module';
import { TaxesComponent } from './taxes.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from '../../../shared/shared.module';
import { TaxesFormComponent } from './taxes-form/taxes-form.component';
@NgModule({
  declarations: [
    TaxesComponent,
    TaxesFormComponent
  ],
  imports: [
    CommonModule,
    TaxesRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class TaxesModule { }
