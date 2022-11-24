import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  templateUrl: './taxes-form.component.html',
})
export class TaxesFormComponent implements OnInit {
  taxesForm :FormGroup;
  constructor(private _fb: FormBuilder , private _apiService : ApiService ,  private _ref: DynamicDialogRef) {}

  ngOnInit(): void {
    this.initTaxesForm()
  }

  private initTaxesForm = (): void => {
    this.taxesForm = this._fb.group({
     name:['' , Validators.required],
     is_include:[false], 
     tax_value :[],
     user_id:[],
     branches:['' , Validators.required]
    });
  }

  submitAdd = (formValues: any): void => {
    // this._apiService.apiName = 'taxes';
    if (this.taxesForm.invalid) {
      return;
    }
    // this._apiService.add(taxesData).subscribe(() => this._ref.close(true));
    this._ref.close(true)
    }
    get vf() {
      return this.taxesForm.controls;
    }

}

