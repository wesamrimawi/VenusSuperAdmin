import { SmartTableModule } from './../../core/smart-table/smart-table.module';
import { AddSystemModuleComponent } from './add-system-module/add-system-module.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';



import { SystemModulesRoutingModule } from './system-modules-routing.module';
import { SystemModulesComponent } from './system-modules.component';

@NgModule({
  declarations: [
    SystemModulesComponent,
    AddSystemModuleComponent
  ],
  imports: [
    CommonModule,
    SystemModulesRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class SystemModulesModule { }
