import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './manufacturer-form.component.html',
})
export class ManufacturerFormComponent implements OnInit {

  manufacturerForm :FormGroup;
  constructor(private _fb: FormBuilder , private _ref :DynamicDialogRef) {}
  ngOnInit(): void {
    this.initManufacturerForm()
  }

  private initManufacturerForm = (): void => {
    this.manufacturerForm = this._fb.group({
     name:['' , Validators.required],
     branches:['' , Validators.required],
     user_id :[]
    });
  }

  submitAdd = (formValues): void => {
    if (this.manufacturerForm.invalid) {
      return;
    }
    // this._apiService.apiName = 'manufacturer';
    // this._apiService.add(manufacturerData).subscribe(() => this._ref.close(true));
    }
    get vf() {
      return this.manufacturerForm.controls;
    }

}