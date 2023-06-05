import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDetailsComponent } from './clients-details.component';

const routes: Routes = [{ path: "", component: ClientsDetailsComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsDetailsRoutingModule { }
