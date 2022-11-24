import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableComponent } from './smart-table.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import { SharedModule } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SmartTableComponent
    ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RouterModule,
    SplitButtonModule,
    MenuModule,
    SharedModule,
    TranslateModule
  ],
  exports: [SmartTableComponent]
})
export class SmartTableModule { }
