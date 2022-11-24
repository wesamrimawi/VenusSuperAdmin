import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const permissions = JSON.parse(sessionStorage.getItem('user_role') ?? '{}');
    const pageName: string = route.data['pageName'];



    return true;
  }

}
