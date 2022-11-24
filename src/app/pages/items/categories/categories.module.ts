import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesFormComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class CategoriesModule { }
