import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseTypesComponent } from './expense-types.component';

const routes: Routes = [{ path: '', component: ExpenseTypesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseTypesRoutingModule { }
