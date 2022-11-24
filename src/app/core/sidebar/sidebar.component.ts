import { Permissions } from './../../models/permissions.model';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  srcImg: string = 'assets/images/logo.png';

  visableNormal: boolean = true;
  visableSmall: boolean = false;
  tabsList$: Observable<Permissions[]> = of([]);
  allTaps: string | any;

  constructor(private _apiService: ApiService, private _breakpointObserver: BreakpointObserver) {

    this._breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset, Breakpoints.XSmall, Breakpoints.HandsetPortrait, Breakpoints.Tablet]).subscribe(result => {
      if (result.matches) {
        this.visableNormal = false;
        this.visableSmall = true
      } else {
        this.visableNormal = true;
        this.visableSmall = false
      }
    });
    this.checkOrderTabPermissions()
  }

  ngOnInit(): void {
  }


  checkOrderTabPermissions() {
    const permissions = sessionStorage.getItem('user_role');
    if (permissions) {
      const permissionsTap = JSON.parse(permissions);
      const tap = permissionsTap.rolePermissions;
      const filiterTap = tap.filter((el: any) => el.read == true);
      this.allTaps = filiterTap.map((el: any) => ({ name: el.permissions.name, key: el.permissions.description }));
    }
  }


}
