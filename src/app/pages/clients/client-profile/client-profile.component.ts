import { Client } from 'src/app/models/client.model';
import { ActivatedRoute } from '@angular/router';
import { Device } from './../../../models/device.model';
import { Branch } from './../../../models/branch.model';
import { Store } from './../../../models/store.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import {  Observable, of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { AddClientComponent } from '../add-client/add-client.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss'],
  providers: [MessageService, DialogService]

})
export class ClientProfileComponent implements OnInit {
  storeList$: Observable<Store[] | any> = of([]);
  deviceList$: Observable<Device[] | any> = of([]);
  branchList$: Observable<Branch[] | any> = of([]);
  clientInfo: Client = { id: 0, area: '', client_name: '', email: '', mobile: '' };
  list: any[] = [];
  colsStore: any[] = [];
  colsDevice: any[] = [];
  colsLocation: any[] = [];
  clientId: number = 0;
  filiterStore: Store[] = [];
  filiterDevice: Device[] = [];
  filiterBranches: Branch[] = []
  constructor(private readonly _messageService: MessageService, private _activatedRoute: ActivatedRoute, private _cdr: ChangeDetectorRef, public dialogService: DialogService, public messageService: MessageService, private _apiService: ApiService, private _translate: TranslateService) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.clientId = +params['id'];
    });
  }

  ngOnInit(): void {
    this.initColsStore();
    this.initColsDevice();
    this.initColsLocation();
    this.loadAllStore();
    this.loadAllDevice();
    this.loadAllBranch();
    this.loadClientInfo();
  }

  private initColsStore = (): void => {
    this.colsStore = [
      { header: this._translate.instant('id'), field: 'id' },
      { header: this._translate.instant('name'), field: 'store_name' },
      { header: this._translate.instant('email'), field: 'email' },
      { header: this._translate.instant('code'), field: 'code' },
      { header: this._translate.instant('mobile'), field: 'mobile' },
    ];
    this.filiterStore = this.colsStore.map(el => el.field)
  }

  private initColsDevice = (): void => {
    this.colsDevice = [
      { header: this._translate.instant('id'), field: 'id' },
      { header: this._translate.instant('device_name'), field: 'device_name' },
      { header: this._translate.instant('serial_number'), field: 'serialNumber' },
      // { header: this._translate.instant('products'), field: '' },
    ];
    this.filiterDevice = this.colsDevice.map(el => el.field)
  }
  private initColsLocation = (): void => {
    this.colsLocation = [
      // { header: 'Store ID', field: '' },
      { header: 'Branch Name', field: 'branch_name' },
      { header: 'Mobile', field: 'mobile' },
      { header: 'Subscription', field: 'subscriptionType' },
      { header: 'Contract Date', field: 'contract_date' },
      { header: 'Activation Date', field: 'activation_date' },
      // { header: 'Country', field: '' },
      // { header: 'City', field: '' },
      // { header: 'Business ID', field: '' },
      { header: 'Address', field: 'address' },
      { header: 'Reference number', field: 'refNumber' },
      // { header: 'Main Category', field: '' },
      // { header: 'Sub Category', field: '' },
      // { header: 'Plan', field: 'plan' },
      { header: 'Status', field: 'status' },
    ];
    this.filiterBranches = this.colsLocation.map(el => el.field)
  }

  private loadClientInfo = (): void => {
    this._apiService.apiName = `clients`;
    this._apiService.getById(this.clientId).subscribe(resp => {
      if (resp.error_code === 0) {
        this.clientInfo = resp.data;
      }
    });
  }

  private loadAllStore = (): void => {
    this._apiService.apiName = `clients/${this.clientId}/stores`;
    this.storeList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  private loadAllDevice = (): void => {
    this._apiService.apiName = `clients/${this.clientId}/devices`;
    this.deviceList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  private loadAllBranch = (): void => {
    this._apiService.apiName = `clients/${this.clientId}/branches`;
    this.branchList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }


  editProfileUser = () => {
    this.dialogService.open(AddClientComponent, {
      header: 'Edit Client Profile',
      width: '50%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000,
      data: { editMode: true, details: this.clientInfo },
      closable: true
    }).onClose.subscribe(edited => {
      if (edited) {
        this.loadClientInfo();
        this._messageService.add({ severity: 'success', summary: 'CLient Successfully Updated' });
        this._cdr.detectChanges();
      }
    });
  }

  editClientStore = (data: Store) => {
    this.dialogService.open(AddStoreComponent, {
      header: 'Edit Client Store',
      width: '50%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000,
      data: { editMode: true, details: data },
      closable: true
    }).onClose.subscribe(edited => {
      if (edited) {
        this.loadAllStore();
        this._messageService.add({ severity: 'success', summary: 'Store Successfully Updated' });
        this._cdr.detectChanges();
      }
    });
  }

  editClientBranch = (data: Store) => {
    this.dialogService.open(AddLocationComponent, {
      header: 'Edit Client Branch',
      width: '50%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000,
      data: { editMode: true, details: data },
      closable: true
    }).onClose.subscribe(edited => {
      if (edited) {
        this.loadAllBranch();
        this._messageService.add({ severity: 'success', summary: 'Branch Successfully Updated' });
        this._cdr.detectChanges();
      }
    });
  }

  editClientDevice = (data: Store) => {
    this.dialogService.open(AddDeviceComponent, {
      header: 'Edit Client Device',
      width: '50%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000,
      data: { editMode: true, details: data },
      closable: true
    }).onClose.subscribe(edited => {
      if (edited) {
        this.loadAllDevice();
        this._messageService.add({ severity: 'success', summary: 'Device Successfully Updated' });
        this._cdr.detectChanges();
      }
    });
  }


  addStoreDialog = () => {
    this.dialogService.open(AddStoreComponent, {
      header: 'Add Store',
      width: '50%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000,
      closable: true
    }).onClose.subscribe((added) => {
      if (added) {
        this.loadAllStore();
        this._cdr.detectChanges();
      }
    });
  }




  addDeviceDialog = () => {
    this.dialogService.open(AddDeviceComponent, {
      header: 'Add Device',
      width: '60%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000,
      closable: true
    }).onClose.subscribe((added) => {
      if (added) {
        this.loadAllDevice();
        this._cdr.detectChanges();
      }
    });
  }

  addBranchesDialog = () => {
    this.dialogService.open(AddLocationComponent, {
      header: 'Add Branches Details',
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      closable: true
    }).onClose.subscribe((added) => {
      if (added) {
        this.loadAllBranch();
        this._cdr.detectChanges();
      }
    });
  }


  deleteStore = (data: Store): void => {
    this._apiService.apiName = `clients/${this.clientId}/stores/`;
    this._apiService.delete(data.id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllStore();
        this._cdr.detectChanges();
      }
    });
  }

  deleteBranch = (data: Branch): void => {
    this._apiService.apiName = `clients/${this.clientId}/branches/`;
    this._apiService.delete(data.id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllBranch();
        this._cdr.detectChanges();
      }
    });
  }

  deleteDevice = (data: Device): void => {
    this._apiService.apiName = `clients/${this.clientId}/devices/`;
    this._apiService.delete(data.id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllDevice();
        this._cdr.detectChanges();
      }
    });
  }
}
