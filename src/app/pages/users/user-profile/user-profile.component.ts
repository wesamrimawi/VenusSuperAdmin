import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  items: any = [];
  routeItems: any = [];
  activeIndex1: number = 0;

  constructor() { }

  ngOnInit() {

    this.items = [
      { label: 'Information', icon: 'pi pi-info' },
      { label: 'Delete', icon: 'pi pi-trash' },
    ];

  }

}
