import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierProfileComponent } from './supplier-profile.component';

const routes: Routes = [{ path: '', component: SupplierProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierProfileRoutingModule { }
