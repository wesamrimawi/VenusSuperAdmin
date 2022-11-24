import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesGroupRoutingModule } from './branches-group-routing.module';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { BranchesGroupComponent } from './branches-group.component';
import { BrancheGroupFormComponent } from './branche-group-form/branche-group-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    BranchesGroupComponent,
    BrancheGroupFormComponent
  ],
  imports: [
    CommonModule,
    BranchesGroupRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class BranchesGroupModule { }
