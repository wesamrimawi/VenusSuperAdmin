import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from '../../shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class UsersModule { }
