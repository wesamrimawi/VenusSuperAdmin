import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionsRoutingModule } from './productions-routing.module';
import { ProductionsComponent } from './productions.component';


@NgModule({
  declarations: [
    ProductionsComponent
  ],
  imports: [
    CommonModule,
    ProductionsRoutingModule
  ]
})
export class ProductionsModule { }
