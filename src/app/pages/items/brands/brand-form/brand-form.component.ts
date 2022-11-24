import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './brand-form.component.html',
})
export class BrandFormComponent implements OnInit {
  brandForm :FormGroup;
  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef ,private _translate:TranslateService ) { }

  ngOnInit(): void {
    this.initBrandForm();
    this.getDiscountType()
  }

  getDiscountType = () :void  => {
  }

  private initBrandForm = (): void => {
    this.brandForm = this._fb.group({
     user_id:[null],
     name:['' , Validators.required],
     branches:['' , Validators.required],
     discount_value :[],
    });
  }

  submitAdd = (formValues: any): void => {
    if (this.brandForm.invalid) {
      return;
    }
    // this._apiService.apiName = 'brand';
    // this._apiService.add(priceListData).subscribe(() => this._ref.close(true));
    }
    
    get vf() {
      return this.brandForm.controls;
    }

}