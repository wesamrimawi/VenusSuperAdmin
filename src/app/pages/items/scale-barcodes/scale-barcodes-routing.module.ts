import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleBarcodesComponent } from './scale-barcodes.component';

const routes: Routes = [{ path: '', component: ScaleBarcodesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScaleBarcodesRoutingModule { }
