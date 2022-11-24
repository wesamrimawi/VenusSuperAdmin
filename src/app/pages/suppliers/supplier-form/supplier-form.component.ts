import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  templateUrl: './supplier-form.component.html',
})
export class SupplierFormComponent implements OnInit {

  supplierForm: FormGroup = new FormGroup({});
  constructor(private _fb: FormBuilder , private _translate : TranslateService , private _ref : DynamicDialogRef) { }

  ngOnInit(): void {
    this.getDiscountType()
    this.initSupplierForm();
  }
  
  getDiscountType = ():void=>{
  }
  
  initSupplierForm = (): void => {
    this.supplierForm = this._fb.group({
      name: ['', Validators.required],
      mobile: [''],
      email: ['',Validators.email],
      discount_type: [],
      discount_value :[''],
      balance:[''],
      branches:['', Validators.required],
      reference_number :[''],
      address :[''],
      notes :['']
    });
  }

  submitAdd = (formValues: any): void => {
    // this._apiService.apiName = 'suppliers';
     // this._apiService.add(suppliersData).subscribe(() => this._ref.close(true));
  }

  get vf() {
    return this.supplierForm.controls;
  }


}
