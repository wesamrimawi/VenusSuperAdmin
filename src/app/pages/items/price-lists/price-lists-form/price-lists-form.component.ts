import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './price-lists-form.component.html',
})
export class PriceListsFormComponent implements OnInit {
  priceListForm :FormGroup;

  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef) { }

  ngOnInit(): void {
    this.initPriceListForm()
  }

  private initPriceListForm = (): void => {
    this.priceListForm = this._fb.group({
     price_list_name:['' , Validators.required],
     branches :[ '' , Validators.required],
     order_type :[],
     customer :[],
     categories:[],//just for search
     variants:[]//just for search
    });
  }

  submitAdd = (formValues: any): void => {
    if (this.priceListForm.invalid) {
      return;
    }
    // this._apiService.apiName = 'price_list';
    // this._apiService.add(priceListData).subscribe(() => this._ref.close(true));
  }
  
    get vf() {
      return this.priceListForm.controls;
    }

}

