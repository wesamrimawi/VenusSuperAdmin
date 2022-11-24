import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutVouchersComponent } from './out-vouchers.component';

const routes: Routes = [{ path: '', component: OutVouchersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutVouchersRoutingModule { }
