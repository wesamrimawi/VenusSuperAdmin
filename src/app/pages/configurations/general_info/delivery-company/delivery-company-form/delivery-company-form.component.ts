import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  templateUrl: './delivery-company-form.component.html',
})
export class DeliveryCompanyFormComponent implements OnInit {
  deliveryCompanyForm :FormGroup;
  editMode :boolean = false

  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef ,private _config : DynamicDialogConfig  , private _apiService : ApiService ) { 
    this._apiService.apiName = 'delivery-companies'

  }

  ngOnInit(): void {
    this.initDeliveryCompanyForm();

    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillDeliveryCompanyForm();
    }

  }

  private initDeliveryCompanyForm = (): void => {
    this.deliveryCompanyForm = this._fb.group({
     user_id:[null],
     name:['' , Validators.required],
     branches:[''],
    });
  }

  private fillDeliveryCompanyForm = (): void => {
  }

  submitAdd = (formValues: any): void => {
    if (this.deliveryCompanyForm.invalid) {
      return;
    }
  
    
    if (this.editMode) {
      const id: number = this._config.data.details.id;
    } else {
    }
  }
    
    get vf() {
      return this.deliveryCompanyForm.controls;
    }

}

