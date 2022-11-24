import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyCloseReportsComponent } from './daily-close-reports.component';

const routes: Routes = [{ path: '', component: DailyCloseReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyCloseReportsRoutingModule { }
