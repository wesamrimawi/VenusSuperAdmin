import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiveVouchersComponent } from './receive-vouchers.component';

const routes: Routes = [{ path: '', component: ReceiveVouchersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveVouchersRoutingModule { }
