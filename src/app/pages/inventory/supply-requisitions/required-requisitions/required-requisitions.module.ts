import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequiredRequisitionsRoutingModule } from './required-requisitions-routing.module';
import { RequiredRequisitionsComponent } from './required-requisitions.component';


@NgModule({
  declarations: [
    RequiredRequisitionsComponent
  ],
  imports: [
    CommonModule,
    RequiredRequisitionsRoutingModule
  ]
})
export class RequiredRequisitionsModule { }
