import { Product } from './../../../../models/product.model';
import { Device } from './../../../../models/device.model';
import { Branch } from './../../../../models/branch.model';
import { AddDeviceDto } from './../../../../dto/add-device.dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import {  Observable, of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './add-device.component.html',
  styleUrls: ['../../../pages.component.scss']
})
export class AddDeviceComponent implements OnInit {
  deviceForm: FormGroup = new FormGroup({});
  productList$: Observable<Product[] | any> = of([]);
  branchList$: Observable<Branch[] | any> = of([]);
  clientId: number = 0;
  editMode: boolean = false;


  constructor(private _config: DynamicDialogConfig, private _fb: FormBuilder, private _apiService: ApiService, private _ref: DynamicDialogRef, private _activatedRoute: ActivatedRoute,) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.clientId = +params['id'];
    });
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.initDeviceForm();
    this.loadAllBranch();
    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillDeviceFrom();
    }
  }

  private fillDeviceFrom() {
    const details: Device = this._config.data.details;
    console.log(details)
    this.deviceForm.controls['name'].setValue(details.device_name);
    this.deviceForm.controls['product_id'].setValue(details.product);
    this.deviceForm.controls['serial_number'].setValue(details.serialNumber);
    this.deviceForm.controls['branches'].setValue(details.branches?.map((branches: Branch) => branches.id))
  }


  private loadAllBranch = (): void => {
    this._apiService.apiName = `clients/${this.clientId}/branches`;
    this.branchList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  initDeviceForm = (): void => {
    this.deviceForm = this._fb.group({
      name: ['', Validators.required],
      serial_number: ['', Validators.required],
      product_id: ['', Validators.required],
      branches: [[], Validators.required]
    });
  }

  private getAllProduct = (): void => {
    this._apiService.apiName = 'products'
    this.productList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  submitAdd = (formValues: any): void => {
    if (this.deviceForm.invalid) {
      return;
    }
    const selected_branches = formValues.branches;

    const data: AddDeviceDto = {
      device_name: formValues.name,
      serial_number: formValues.serial_number,
      product_id: formValues.product_id.id,
      branch_ids: selected_branches.map(br => +br.id),
      store_id: +selected_branches[0]?.store?.id
    }

    if (this.editMode) {
      this._apiService.apiName = `clients/${this.clientId}/devices`;
      const id: number = this._config.data.details.id;
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      this._apiService.apiName = `clients/${this.clientId}/devices`;
      this._apiService.add(data).subscribe(() => this._ref.close(true));
    }
  }

  get vf() {
    return this.deviceForm.controls;
  }
}
