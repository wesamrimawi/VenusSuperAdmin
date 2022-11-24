import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemQuantitiesRoutingModule } from './item-quantities-routing.module';
import { ItemQuantitiesComponent } from './item-quantities.component';


@NgModule({
  declarations: [
    ItemQuantitiesComponent
  ],
  imports: [
    CommonModule,
    ItemQuantitiesRoutingModule
  ]
})
export class ItemQuantitiesModule { }
