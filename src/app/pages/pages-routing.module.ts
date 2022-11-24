import { BranchesGroupModule } from './configurations/general_info/branches-group/branches-group.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PermissionGuard } from '../guard/permission.guard';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: '', redirectTo: 'dashboard' , pathMatch:'full'},
      { path: 'dashboard', canActivate: [PermissionGuard], data: { pageName: 'dashboard' }, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'products', canActivate: [PermissionGuard], data: { pageName: 'products' }, loadChildren: () => import('./products/products.module').then(m => m.DeviceModule) },
      { path: 'users', canActivate: [PermissionGuard], data: { pageName: 'users' }, loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'usergroups', canActivate: [PermissionGuard], data: { pageName: 'usergroups' }, loadChildren: () => import('./user-groups/user-groups.module').then(m => m.UserGroupsModule) },
      { path: 'plans', canActivate: [PermissionGuard], data: { pageName: 'plans' }, loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule) },
      { path: 'tags', canActivate: [PermissionGuard], data: { pageName: 'tags' }, loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule) },
      { path: 'clients', canActivate: [PermissionGuard], data: { pageName: 'clients' }, loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
      { path: 'systemmodules', canActivate: [PermissionGuard], data: { pageName: 'systemmodules' }, loadChildren: () => import('./system-modules/system-modules.module').then(m => m.SystemModulesModule) },
      { path: 'clientprofile', canActivate: [PermissionGuard], data: { pageName: 'clientprofile' }, loadChildren: () => import('./clients/client-profile/client-profile.module').then(m => m.ClientProfileModule) },
  

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
