import { Client } from 'src/app/models/client.model';
import { AddClientDto } from './../../../dto/add-client.dto';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {  Observable, of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { City } from './../../../models/city.model';
import { Countries } from './../../../models/countries.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './add-client.component.html',
  styleUrls: ['../../pages.component.scss'],
})
export class AddClientComponent implements OnInit {

  tags: any[] | any;
  sub_tags: any[] | any;
  clientForm: FormGroup = new FormGroup({});
  allCounties$: Observable<Countries[] | any> = of([]);
  allCity$: Observable<City[] | any> = of([]);
  allMainTags$: Observable<City[] | any> = of([]);
  subTags$: Observable<City[] | any> = of([]);
  editMode: boolean = false;

  constructor(private _config: DynamicDialogConfig, private _router: Router, private _apiService: ApiService, private _fb: FormBuilder, private _ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.initClientForm();
    this.loadAllCounties();
    this.loadAllTag();


    this.editMode = this._config.data?.editMode ?? false;

    if (this.editMode) {
      this.fillClientForm();
    }
  }

  private loadAllCounties = (): void => {
    this._apiService.apiName = 'countries';
    this.allCounties$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  getCityByID = (country: any): void => {
    const id: number = +country.id;
    this._apiService.apiName = `countries/${id}/cities`;
    this.allCity$ = this._apiService.getAll().pipe(map((resp => resp.error_code === 0 && resp.data)));
  }

  private loadAllTag = (): void => {
    this._apiService.apiName = 'tags/all';
    this.allMainTags$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  getSubTagById = (values: any): void => {
    this._apiService.apiName = `tags/${values.id}/subtags`;
    this.subTags$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  initClientForm = (): void => {
    this.clientForm = this._fb.group({
      client_name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      area: [''],
      street: [''],
      building_number: [0],
      notes: [''],
      country: ['', Validators.required],
      city: ['', Validators.required],
      main_tag: [''],
      sub_tag: [''],
      files: [''],
      approved: ""
    });
  }

  private fillClientForm = (): void => {
    const details: Client = this._config.data.details;

    this.getCityByID(details.country);

    this.clientForm.controls['client_name'].setValue(details.client_name);
    this.clientForm.controls['mobile'].setValue(details.mobile);
    this.clientForm.controls['email'].setValue(details.email);
    this.clientForm.controls['area'].setValue(details.area);
    this.clientForm.controls['street'].setValue(details.street);
    this.clientForm.controls['building_number'].setValue(details.building_number);
    this.clientForm.controls['notes'].setValue(details.notes);
    this.clientForm.controls['files'].setValue(details.file);
    this.clientForm.controls['country'].setValue(details.country);
    this.clientForm.controls['city'].setValue(details.city);

  }


  get vf() {
    return this.clientForm.controls;
  }

  submitAdd = (formValues: any): void => {

    if (this.clientForm.invalid) {
      return;
    }

    const data: AddClientDto = {
      client_name: formValues.client_name,
      mobile: formValues.mobile,
      email: formValues.email,
      area: formValues.area,
      street: formValues.street,
      building_number: formValues.building_number,
      notes: formValues.notes,
      country_id: formValues.country.id,
      city_id: formValues.city.id,
      approved:formValues.approved
    }

    this._apiService.apiName = 'clients';
    if (this.editMode) {
      const id: number = this._config.data.details.id;
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      this._apiService.add(data).subscribe((resp) => {
        this._ref.close(true);
        this._router.navigate(['/clientprofile'], { queryParams: { id: resp.data } });
      });

    }
  }

}
