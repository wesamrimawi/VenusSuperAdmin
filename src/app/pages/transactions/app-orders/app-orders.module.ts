import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOrdersRoutingModule } from './app-orders-routing.module';
import { AppOrdersComponent } from './app-orders.component';


@NgModule({
  declarations: [
    AppOrdersComponent
  ],
  imports: [
    CommonModule,
    AppOrdersRoutingModule
  ]
})
export class AppOrdersModule { }
