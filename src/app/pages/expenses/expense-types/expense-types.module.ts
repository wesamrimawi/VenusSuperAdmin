import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseTypesRoutingModule } from './expense-types-routing.module';
import { ExpenseTypesComponent } from './expense-types.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from '../../../shared/shared.module';
import { ExpenseTypeFromComponent } from './expense-type-from/expense-type-from.component';


@NgModule({
  declarations: [
    ExpenseTypesComponent,
    ExpenseTypeFromComponent

  ],
  imports: [
    CommonModule,
    ExpenseTypesRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class ExpenseTypesModule { }
