import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymantCardsRoutingModule } from './paymant-cards-routing.module';
import { PaymantCardsComponent } from './paymant-cards.component';
import { PaymantCardFormComponent } from './paymant-card-form/paymant-card-form.component';
import { SmartTableModule } from 'src/app/core/smart-table/smart-table.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [PaymantCardsComponent, PaymantCardFormComponent],
  imports: [
    CommonModule,
    PaymantCardsRoutingModule,
    SharedModule,
    SmartTableModule
  ]
})
export class PaymantCardsModule { }
