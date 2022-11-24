import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributesRoutingModule } from './attributes-routing.module';
import { AttributesComponent } from './attributes.component';
import { AttributesFormComponent } from './attributes-form/attributes-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import {ChipsModule} from 'primeng/chips';

@NgModule({
  declarations: [
    AttributesComponent,
    AttributesFormComponent
  ],
  imports: [
    CommonModule,
    AttributesRoutingModule,
    SharedModule,
    SmartTableModule,
    ChipsModule
  ]
})
export class AttributesModule { }
