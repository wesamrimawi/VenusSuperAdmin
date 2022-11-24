import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocktakingRoutingModule } from './stocktaking-routing.module';
import { StocktakingComponent } from './stocktaking.component';


@NgModule({
  declarations: [
    StocktakingComponent
  ],
  imports: [
    CommonModule,
    StocktakingRoutingModule
  ]
})
export class StocktakingModule { }
