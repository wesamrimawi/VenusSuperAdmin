import { SmartTableModule } from './../../core/smart-table/smart-table.module';
import { AddTagComponent } from './add-tag/add-tag.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';


import {TagsRoutingModule } from './tags-routing.module';
import {TagsComponent } from './tags.component';

@NgModule({
  declarations: [
    TagsComponent,
    AddTagComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class TagsModule { }
