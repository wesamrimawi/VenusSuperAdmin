import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryVouchersComponent } from './entry-vouchers.component';

const routes: Routes = [{ path: '', component: EntryVouchersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryVouchersRoutingModule { }
