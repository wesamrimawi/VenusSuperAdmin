import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifiersRoutingModule } from './modifiers-routing.module';
import { ModifiersComponent } from './modifiers.component';


@NgModule({
  declarations: [
    ModifiersComponent
  ],
  imports: [
    CommonModule,
    ModifiersRoutingModule
  ]
})
export class ModifiersModule { }
