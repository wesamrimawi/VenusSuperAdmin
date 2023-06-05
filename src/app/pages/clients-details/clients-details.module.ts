import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsDetailsRoutingModule } from './clients-details-routing.module';
import { ClientsDetailsComponent } from './clients-details.component';


@NgModule({
  declarations: [
    ClientsDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientsDetailsRoutingModule
  ]
})
export class ClientsDetailsModule { }
