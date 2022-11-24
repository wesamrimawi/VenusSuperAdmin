import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGroupsComponent } from './user-groups.component';

const routes: Routes = [{ path: '', component: UserGroupsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGroupsRoutingModule { }
