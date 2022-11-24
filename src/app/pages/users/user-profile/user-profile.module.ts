import { UserProfileRoutingModule } from './user-profile-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { SmartTableModule } from './../../../core/smart-table/smart-table.module';
import { UserProfileComponent } from './user-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class UserProfileModule { }
