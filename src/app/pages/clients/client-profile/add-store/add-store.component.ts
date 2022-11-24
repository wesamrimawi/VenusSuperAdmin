import { Store } from './../../../../models/store.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ApiService } from 'src/app/shared/services/api.service';
import { AddStoreDto } from 'src/app/dto/add-stroe.dto';

@Component({
  templateUrl: './add-store.component.html',
  styleUrls: ['../../../pages.component.scss']
})
export class AddStoreComponent implements OnInit {

  storeForm: FormGroup = new FormGroup({});
  clientId: number = 0;
  editMode: boolean = false;

  constructor(private _config: DynamicDialogConfig, private _activatedRoute: ActivatedRoute, private _router: Router, private _fb: FormBuilder, private _apiService: ApiService, private _ref: DynamicDialogRef) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.clientId = +params['id'];
    });
  }

  ngOnInit(): void {
    this.initStoreForm();
    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillStoreFrom();
    }
  }


  private fillStoreFrom() {
    const details: Store = this._config.data.details;
    this.storeForm.controls['name'].setValue(details.store_name);
    this.storeForm.controls['mobile_number'].setValue(details.mobile);
    this.storeForm.controls['email'].setValue(details.email);
    this.storeForm.controls['code'].setValue(details.code);
  }

  initStoreForm = (): void => {
    this.storeForm = this._fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      mobile_number: ['', Validators.required],
      email: ['', Validators.email]
    });
  }

  submitAdd = (formValues: any): void => {

    if (this.storeForm.invalid) {
      return;
    }

    const data: AddStoreDto = {
      'store_name': formValues.name,
      'email': formValues.email,
      'mobile_number': formValues.mobile_number,
    };

    if (this.editMode) {
      const id: number = this._config.data.details.id;
      this._apiService.apiName = `clients/${this.clientId}/stores`;
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      data.code = formValues.code;
      this._apiService.apiName = `clients/${this.clientId}/stores`;
      this._apiService.add(data).subscribe((resp) => {
        if (resp.error_code == 1) {
          this.storeForm.controls['code'].setErrors({
            "codeExist": true
          });
        } else {
          this._ref.close(true);
        }
      });
    }
  }

  get vf() {
    return this.storeForm.controls;
  }

}
