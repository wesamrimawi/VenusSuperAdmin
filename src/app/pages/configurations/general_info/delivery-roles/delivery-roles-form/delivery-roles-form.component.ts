import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  templateUrl: './delivery-roles-form.component.html',
})
export class DeliveryRolesFormComponent implements OnInit {

  deliveryRolesForm :FormGroup;
  editMode :boolean = false
  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef , private _config:DynamicDialogConfig  , private _apiService :ApiService) { 
    this._apiService.apiName ='delivery-rules'
  }

  ngOnInit(): void {
    this.initDeliveryRolesForm();

    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillDeliveryRolesForm();
    }
  }

  private initDeliveryRolesForm = (): void => {
    this.deliveryRolesForm = this._fb.group({
     user_id:[null],
     name:['' , Validators.required],
     branches:[''],//req
     condition:[''],
     answer:[''],
     charge :['']
    });
  }

  private fillDeliveryRolesForm = (): void => {
  }


  submitAdd = (formValues: any): void => {
    if (this.deliveryRolesForm.invalid) {
      return;
    }
  
    if (this.editMode) {
      const id: number = this._config.data.details.id;
    } else {
    }
  }
    
    get vf() {
      return this.deliveryRolesForm.controls;
    }

}


