import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitsRoutingModule } from './debits-routing.module';
import { DebitsComponent } from './debits.component';


@NgModule({
  declarations: [
    DebitsComponent
  ],
  imports: [
    CommonModule,
    DebitsRoutingModule
  ]
})
export class DebitsModule { }
