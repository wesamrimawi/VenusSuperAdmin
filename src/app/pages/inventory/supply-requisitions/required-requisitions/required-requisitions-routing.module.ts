import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequiredRequisitionsComponent } from './required-requisitions.component';

const routes: Routes = [{ path: '', component: RequiredRequisitionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequiredRequisitionsRoutingModule { }
