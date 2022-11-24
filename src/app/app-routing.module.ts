import { AuthComponent } from './../auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
    { path: '', canActivate: [AuthGuard], loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
  ];
@NgModule({
 
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', urlUpdateStrategy: 'eager' })],

    exports: [RouterModule]
})
export class AppRoutingModule {
}