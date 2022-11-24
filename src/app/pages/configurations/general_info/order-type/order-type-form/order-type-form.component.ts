import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  templateUrl: './order-type-form.component.html',
})
export class OrderTypeFormComponent implements OnInit {
  orderTypeForm :FormGroup;
  editMode:boolean = false; 

  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef ,private _config : DynamicDialogConfig ,private _apiService :ApiService ) {
    this._apiService.apiName = 'ordertypes'
   }

  ngOnInit(): void {
    this.initPaymentCardForm();
    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillOrderTypeForm();
    }
  }

  private initPaymentCardForm = (): void => {
    this.orderTypeForm = this._fb.group({
     user_id:[null],
     branches:[''],// , Validators.required
     name:[''],
     service_percentage :[],
     use_in_order_app :[false]
    });
  }

  private fillOrderTypeForm = (): void => {
  }

  

  submitAdd = (formValues: any): void => {
    if (this.orderTypeForm.invalid) {
      return;
    }
    
    if (this.editMode) {
      const id: number = this._config.data.details.id;
    } else {
    }
  }
    get vf() {
      return this.orderTypeForm.controls;
    }

}