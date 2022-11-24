import { SupplierProfileRoutingModule } from './supplier-profile-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { SmartTableModule } from '../../../core/smart-table/smart-table.module';
import { SupplierProfileComponent} from './supplier-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SupplierProfileComponent
  ],
  imports: [
    CommonModule,
    SupplierProfileRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class SupplierProfileModule { }
