import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './scale-barcode-form.component.html',
})
export class ScaleBarcodeFormComponent implements OnInit {

  scaleBarcodeForm :FormGroup;

  constructor(private _fb: FormBuilder) {}
  ngOnInit(): void {
    this.initScaleBarcodeForm()
  }

  private initScaleBarcodeForm = (): void => {
    this.scaleBarcodeForm = this._fb.group({
      name : ['' , Validators.required] ,
      start_of_barcode : ['' , Validators.required] ,
      end_of_barcode:['' , Validators.required] ,
      number_of_digits : [null , Validators.required] ,
      number_of_digits_before_fraction :[null , Validators.required] ,
      number_of_digits_after_fraction :[null , Validators.required] ,
      branches :['' , Validators.required] ,
      user_id : []
    });
  }

  submitAdd = (formValues): void => {
    if (this.scaleBarcodeForm.invalid) {
      return;
    }
    // this._apiService.apiName = 'ScaleSetting';
    // this._apiService.add(ScaleSettingData).subscribe(() => this._ref.close(true));
    }
    get vf() {
      return this.scaleBarcodeForm.controls;
    }

}
