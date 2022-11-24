import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { SelectItem } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './expense-type-from.component.html',
})
export class ExpenseTypeFromComponent implements OnInit {
  expenseTypeForm: FormGroup = new FormGroup({});
  editMode: boolean = false;

  constructor(private _config: DynamicDialogConfig , private _fb: FormBuilder , private _ref : DynamicDialogRef , private _apiService :ApiService, private _translate : TranslateService){}

  ngOnInit() {
    this.getExpensesType();
    this.initExpenseTypeForm();
    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillExpensesTypeForm();
    }
  }

  initExpenseTypeForm = (): void => {
    this.expenseTypeForm = this._fb.group({
      name: ['', Validators.required],
      // branches: ['', Validators.required],
      type:[],
      user_id:[null]
    });
  }

  private fillExpensesTypeForm = (): void => {
  }

  getExpensesType = ():void =>{
  }

  submitAdd = (formValues: any): void => {
    if (this.expenseTypeForm.invalid) {
      return;
    }
    
    this._apiService.apiName = 'expensetypes';
    if (this.editMode) {
      const id: number = this._config.data.details.id;
    } else {
    }
  }
    
    get vf() {
      return this.expenseTypeForm.controls;
    }

}
