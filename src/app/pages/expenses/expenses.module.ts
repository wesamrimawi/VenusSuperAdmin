import { SmartTableModule } from './../../core/smart-table/smart-table.module';
import { ExpenseFromComponent } from './expense-from/expense-from.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ExpensesComponent,
    ExpenseFromComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class ExpensesModule { }
