import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyCloseReportsRoutingModule } from './daily-close-reports-routing.module';
import { DailyCloseReportsComponent } from './daily-close-reports.component';


@NgModule({
  declarations: [
    DailyCloseReportsComponent
  ],
  imports: [
    CommonModule,
    DailyCloseReportsRoutingModule
  ]
})
export class DailyCloseReportsModule { }
