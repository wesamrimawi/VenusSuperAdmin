import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { UserGroupFormComponent } from './user-group-form/user-group-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGroupsRoutingModule } from './user-groups-routing.module';
import { UserGroupsComponent } from './user-groups.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    UserGroupsComponent,
    UserGroupFormComponent
  ],
  imports: [
    CommonModule,
    UserGroupsRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class UserGroupsModule { }
