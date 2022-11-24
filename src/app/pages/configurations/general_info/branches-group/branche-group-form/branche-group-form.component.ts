import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './branche-group-form.component.html',
})
export class BrancheGroupFormComponent implements OnInit {
  branchesGroupForm :FormGroup;

  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef ,private _translate:TranslateService ) { }

  ngOnInit(): void {
    this.initBrandForm();
  }



  private initBrandForm = (): void => {
    this.branchesGroupForm = this._fb.group({
     user_id:[null],
     name:['' , Validators.required],
     branches:['' , Validators.required],
    });
  }

  submitAdd = (formValues: any): void => {
    if (this.branchesGroupForm.invalid) {
      return;
    }
    // this._apiService.apiName = 'brand';
    // this._apiService.add(priceListData).subscribe(() => this._ref.close(true));
    }
    
    get vf() {
      return this.branchesGroupForm.controls;
    }

}
