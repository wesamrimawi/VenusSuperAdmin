import { SmartTableModule } from './../../core/smart-table/smart-table.module';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';



import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class DeviceModule { }
