import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitsComponent } from './debits.component';

const routes: Routes = [{ path: '', component: DebitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitsRoutingModule { }
