import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SuppliersComponent,
    SupplierFormComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class SuppliersModule { }
