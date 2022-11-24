import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferVouchersComponent } from './transfer-vouchers.component';

const routes: Routes = [{ path: '', component: TransferVouchersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferVouchersRoutingModule { }
