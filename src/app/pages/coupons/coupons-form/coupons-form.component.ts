import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  templateUrl: './coupons-form.component.html',
  styleUrls: ['./coupons-form.component.scss']
})
export class CouponsFormComponent implements OnInit {

  couponForm :FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllowedData();
    this.initCustomerGroupForm()
  }

  getAllowedData = ():void =>{
  }

  private initCustomerGroupForm = (): void => {
    this.couponForm = this._fb.group({
     name:[''],
     code:[], 
     quantity :[],
     end_date :[],
     branches :[],//multi
     price :[],
     description :[null],
    });
  }

  submitAdd = (formValues: any): void => {

    if (this.couponForm.invalid) {
      return;
    }

    // this._apiService.apiName = 'customers';
    // this._apiService.add(formValues).subscribe(() => this._ref.close(true));
    const customerData:any = {...formValues}
      console.log(formValues)
    }
    
    get vf() {
      return this.couponForm.controls;
    }

}
