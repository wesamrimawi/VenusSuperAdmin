import { QuickItemFormComponent } from './quick-item-form/quick-item-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { SharedModule } from '../../../shared/shared.module';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { ItemFormComponent } from './item-form/item-form.component';


@NgModule({
  declarations: [
    ItemsComponent,
    ItemFormComponent,
    QuickItemFormComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class ItemsModule { }
