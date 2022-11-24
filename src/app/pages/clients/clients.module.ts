import { SmartTableModule } from './../../core/smart-table/smart-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

// primeng
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { AddClientComponent } from './add-client/add-client.component';


@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ClientsRoutingModule,
    TabViewModule,
    SharedModule,
    TableModule,
    ToastModule,
    SmartTableModule
  ]
})
export class ClientsModule { }


