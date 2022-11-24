import { SmartTableModule } from './../../core/smart-table/smart-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';



import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { AddPlanComponent } from './add-plan/add-plan.component';

import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlansComponent,
    AddPlanComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PlansRoutingModule,
    MultiSelectModule,
    FormsModule,
    SmartTableModule
  ]
})
export class PlansModule { }
