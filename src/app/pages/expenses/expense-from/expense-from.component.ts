import { map, filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectItem } from 'primeng/api';

@Component({
  templateUrl: './expense-from.component.html',
})
export class ExpenseFromComponent implements OnInit {

  expenseForm: FormGroup = new FormGroup({});
  filteredSuppliers: any[];
  filteredExpensesTypes: any[];
  Suppliers: any[];
  filiterType:any ;
  editMode: boolean = false;

  constructor(private _config: DynamicDialogConfig , private _fb: FormBuilder , private _ref : DynamicDialogRef , private _apiService : ApiService , private _translate :TranslateService) {
  }

  ngOnInit() {
    this.getExpensesType()
    this.initExpenseForm();
    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillExpensesForm();
    }
  }

  getExpensesType = ():void =>{
   }

   private fillExpensesForm = (): void => {
    const details: any = this._config.data.details;
    this.expenseForm.controls['type'].setValue(details.type);
    this.expenseForm.controls['amount'].setValue(details.amount);
    this.expenseForm.controls['expense_type'].setValue(details.expense_type);
    this.expenseForm.controls['tax_amount'].setValue(details.tax_amount);
    this.expenseForm.controls['reference_number'].setValue(details.reference_number);
    this.expenseForm.controls['suppliers'].setValue(null);
    this.expenseForm.controls['invoice_number'].setValue(details.invoice_number);
    this.expenseForm.controls['notes'].setValue(details.notes);
    this.expenseForm.controls['deducting_from_cash'].setValue(details.deducting_from_cash);
  }

  initExpenseForm = (): void => {
    this.expenseForm = this._fb.group({
      amount: ['', Validators.required],
      tax_amount: [''],
      invoice_number: [''],
      reference_number: [''],
      suppliers:[''],
      deducting_from_cash: [true],
      expense_type:[''],
      notes: [''],
      user_id:[],
      branch_id:[],
      type:[]
    });
  }

  selectType(val){
    console.log(val)
    this._apiService.apiName = 'expensetypes'
    this._apiService.getAll().subscribe(el=>{
      const expensesType = el.data
      this.filiterType = expensesType.filter(el=> el.type == val);
     console.log(this.filiterType)
    })
  }

  submitAdd = (formValues: any): void => {
    if (this.expenseForm.invalid) {
      return;
    }
    

  }
    
    get vf() {
      return this.expenseForm.controls;
    }
}
