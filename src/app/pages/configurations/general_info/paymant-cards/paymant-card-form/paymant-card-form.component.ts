import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  templateUrl: './paymant-card-form.component.html',
})
export class PaymantCardFormComponent implements OnInit {

  paymentCardForm :FormGroup;

  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef ,private _translate:TranslateService ) { }

  ngOnInit(): void {
    this.initPaymentCardForm();
  }

  private initPaymentCardForm = (): void => {
    this.paymentCardForm = this._fb.group({
     user_id:[null , Validators.required],
     name:[''],
     branches:['' , Validators.required],
     reference_number:[]
    });
  }

  submitAdd = (formValues: any): void => {
    if (this.paymentCardForm.invalid) {
      return;
    }
    // this._apiService.apiName = 'brand';
    // this._apiService.add(paymentCardFormData).subscribe(() => this._ref.close(true));
    }
    
    get vf() {
      return this.paymentCardForm.controls;
    }

}
