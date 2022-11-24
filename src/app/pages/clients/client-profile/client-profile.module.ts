import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';

import { UserProfileRoutingModule } from './client-profile-routing.module';
import { ClientProfileComponent } from './client-profile.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddStoreComponent } from './add-store/add-store.component';

@NgModule({
  declarations: [
    ClientProfileComponent,
    AddDeviceComponent,
    AddLocationComponent,
    AddStoreComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule,
    TabViewModule,
    TableModule,
    SmartTableModule
  ]
})
export class ClientProfileModule { }
