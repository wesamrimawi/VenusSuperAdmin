import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.scss']
})
export class SupplierProfileComponent implements OnInit {

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
