import { DeliveryCompanyComponent } from './delivery-company.component';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'' , component:DeliveryCompanyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryCompanyRoutingModule { }
