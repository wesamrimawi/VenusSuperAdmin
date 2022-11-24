import { AddUserGroupComponent } from './add-user-group/add-user-group.component';
import { SharedModule } from '../../shared/shared.module';
import { SmartTableModule } from '../../core/smart-table/smart-table.module';
import { UserGroupsRoutingModule } from './user-groups-routing.module';
import { UserGroupsComponent } from './user-groups.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations:[
    UserGroupsComponent,
    AddUserGroupComponent
  ],
  imports: [
    CommonModule,
    UserGroupsRoutingModule,
    SmartTableModule,
    SharedModule,
    CheckboxModule
  ],
})
export class UserGroupsModule {}
