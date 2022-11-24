import { Status } from './../../../../enum/status.enum';
import { SubscriptionType } from './../../../../enum/subscription-type.enum';
import { Branch } from './../../../../models/branch.model';
import { ActivatedRoute } from '@angular/router';
import { Tag } from './../../../../models/tag.model';
import { Plan } from './../../../../models/plan.model';
import { AddBranchDto } from './../../../../dto/add-branch.dto';
import { Store } from './../../../../models/store.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import {  Observable, of } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { Countries } from 'src/app/models/countries.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './add-location.component.html',
  styleUrls: ['../../../pages.component.scss']
})
export class AddLocationComponent implements OnInit {

  status: SelectItem<Status | any>[] = []
  subscription: SelectItem<SubscriptionType | any>[] = []
  locationForm: FormGroup = new FormGroup({});
  allPlans$: Observable<Plan[] | any> = of([]);
  allCounties$: Observable<Countries[] | any> = of([]);
  allCity$: Observable<City[] | any> = of([]);
  allStores$: Observable<Store[] | any> = of([]);
  allBusinessTypes$: Observable<any[] | any> = of([]);
  allMainTags$: Observable<Tag[] | any> = of([]);
  subTags$: Observable<Tag[] | any> = of([]);
  clientId: number = 0;
  editMode: boolean = false;

  constructor(private _config: DynamicDialogConfig, private _activatedRoute: ActivatedRoute, private _fb: FormBuilder, private _apiService: ApiService, private _ref: DynamicDialogRef) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.clientId = +params['id'];
    });
  }

  ngOnInit(): void {
    this.subscription = Object.entries(SubscriptionType).map(([key, value]) => ({ label: key, value: value }));
    this.status = Object.entries(Status).map(([key, value]) => ({ label: key, value: value }));
    this.loadAllBusinessTypes();
    this.loadAllCounties();
    this.loadAllTag();

    this.loadAllStores();
    this.loadAllPlans();

    this.initBranchForm();

    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillBranchFrom();
    }
  }

  private fillBranchFrom() {

    const details: Branch = this._config.data.details;

    console.log(details.mainTag)
    const expiry_date = new Date(details.expiry_date);
    const activation_date = new Date(details.activation_date);
    const contract_date = new Date(details.contract_date);

    this.getCityByID(details.country);
    this.getSubTagById(details.mainTag?.id);


    this.locationForm.controls['store_id'].setValue(details.store);
    this.locationForm.controls['name'].setValue(details.branch_name);
    this.locationForm.controls['mobile_number'].setValue(details.mobile);
    this.locationForm.controls['subscription_type'].setValue(details.subscriptionType);
    this.locationForm.controls['contract_date'].setValue(contract_date);
    this.locationForm.controls['activation_date'].setValue(activation_date);
    this.locationForm.controls['expiry_date'].setValue(expiry_date);
    this.locationForm.controls['country_id'].setValue(details.country);
    this.locationForm.controls['city_id'].setValue(details.city);
    this.locationForm.controls['tag'].setValue(details.mainTag?.id);
    this.locationForm.controls['sub'].setValue(details.subTag);
    this.locationForm.controls['business_type_id'].setValue(details.businessType);
    this.locationForm.controls['address'].setValue(details.address);
    this.locationForm.controls['ref_number'].setValue(details.refNumber);
    this.locationForm.controls['plan_id'].setValue(details.plan);
    this.locationForm.controls['status'].setValue(details.status);
  }

  initBranchForm = (): void => {
    this.locationForm = this._fb.group({
      store_id: ['', Validators.required],
      name: ['', Validators.required],
      mobile_number: ['', Validators.required],
      subscription_type: ['', Validators.required],
      contract_date: [''],
      activation_date: [''],
      expiry_date: ['', Validators.required],
      country_id: ['', Validators.required],
      city_id: ['', Validators.required],
      tag: ['', Validators.required],//API
      sub: ['', Validators.required],//API,//API
      business_type_id: ['', Validators.required],//API
      address: [''],
      ref_number: [''],
      plan_id: ['', Validators.required],
      status: ['', Validators.required]
    });
  }


  private loadAllCounties = (): void => {
    this._apiService.apiName = 'countries';
    this.allCounties$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  private loadAllPlans = (): void => {
    this._apiService.apiName = 'plans';
    this.allPlans$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  private loadAllStores = (): void => {
    this._apiService.apiName = `clients/${this.clientId}/stores`;
    this.allStores$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  private loadAllBusinessTypes = (): void => {
    this._apiService.apiName = `businesstypes`;
    this.allBusinessTypes$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  getCityByID = (country: any): void => {
    const id = + country.id
    this._apiService.apiName = `countries/${id}/cities`;
    this.allCity$ = this._apiService.getAll().pipe(map((resp => resp.error_code === 0 && resp.data)));
  }

  getSubTagById = (id: any): void => {
    this._apiService.apiName = `tags/${id}/subtags`;
    this.subTags$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  private loadAllTag = (): void => {
    this._apiService.apiName = 'tags/all';
    this.allMainTags$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  submitAdd = (formValues: any): void => {
    if (this.locationForm.invalid) {
      return;
    }

    const data: AddBranchDto = {
      branch_name: formValues.name,
      mobile_number: formValues.mobile_number,
      store_id: formValues.store_id.id,
      subscription_type: formValues.subscription_type,
      activation_date: formValues.activation_date,
      contract_date: formValues.contract_date,
      expiry_date: formValues.expiry_date,
      address: formValues.address,
      country_id: formValues.country_id.id,
      city_id: formValues.city_id.id,
      main_tag_id: formValues.tag,
      business_type_id: formValues.business_type_id.id,
      ref_number: formValues.ref_number,
      sub_tag_id: formValues.sub?.id,
      plan_id: formValues.plan_id?.id,
      status: formValues.status,
      reference_number:  formValues.reference_number,
      long: '',
      lat: '',
    }

    if (this.editMode) {
      this._apiService.apiName = `clients/${this.clientId}/branches`;
      const id: number = this._config.data.details.id;
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      this._apiService.apiName = `clients/${this.clientId}/branches`;
      this._apiService.add(data).subscribe(() => this._ref.close(true));
    }

  }

  get vf() {
    return this.locationForm.controls;
  }


}
