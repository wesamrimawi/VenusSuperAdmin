import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoldRequisitionsRoutingModule } from './hold-requisitions-routing.module';
import { HoldRequisitionsComponent } from './hold-requisitions.component';


@NgModule({
  declarations: [
    HoldRequisitionsComponent
  ],
  imports: [
    CommonModule,
    HoldRequisitionsRoutingModule
  ]
})
export class HoldRequisitionsModule { }
