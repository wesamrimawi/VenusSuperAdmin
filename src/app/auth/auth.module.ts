import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayPanelModule } from "primeng/overlaypanel";
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CheckboxModule,
    TranslateModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    SidebarModule

  ]
})
export class AuthModule { }
