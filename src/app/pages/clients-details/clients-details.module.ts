import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableModule } from './../../core/smart-table/smart-table.module';
import { ClientsDetailsRoutingModule } from './clients-details-routing.module';
import { ClientsDetailsComponent } from './clients-details.component';


@NgModule({
  declarations: [
    ClientsDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientsDetailsRoutingModule,
    SmartTableModule
  ]
})
export class ClientsDetailsModule { }
