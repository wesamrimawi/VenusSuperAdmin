import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestroyVouchersComponent } from './destroy-vouchers.component';

const routes: Routes = [{ path: '', component: DestroyVouchersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestroyVouchersRoutingModule { }
