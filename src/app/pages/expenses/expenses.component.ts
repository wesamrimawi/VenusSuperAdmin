import { ApiService } from '../../shared/services/api.service';
import { ExpenseFromComponent } from './expense-from/expense-from.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable, of } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { Expense } from 'src/app/models/expense.model';

@Component({
  templateUrl: './expenses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class ExpensesComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  tableTitle : string = this._translate.instant('expenses');
  tableFilters: string[] = [];
  expensesList$ :Observable<Expense[]|any> =of([])

  constructor(private _apiService : ApiService,private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { 
  this._apiService.apiName = 'expenses'
  }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllExpenses()
  }

  private initTableCols = (): void => {
  this.tableCols = [
    { field: 'id', header: this._translate.instant('id') },
    { field: 'type', header: this._translate.instant('type') },
    { field: 'invoice_number', header: this._translate.instant('invoice_number') },
    { field: 'reference_number', header: this._translate.instant('reference_number') },
    { field: 'user', header: this._translate.instant('user') },
    { field: 'amount', header: this._translate.instant('amount') },
    { field: 'branches', header: this._translate.instant('branches') },
  ];
  this.tableFilters = this.tableCols.map((col) => col.field);
}

private loadAllExpenses = (): void => {
  this.expensesList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
}

deleteExpenses = (data:Expense): void => {
  this._apiService.delete(data.id).subscribe(resp => {
    if(resp.error_code === 0) {
      this.loadAllExpenses();
      this._cdr.detectChanges();
    }
  });
}

  openNew = (): void => {
    this.closeDialogSubs = this._dialogService.open(ExpenseFromComponent, {
      header: this._translate.instant('add_expense'),
      width: '75%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllExpenses();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }


  showEditDialog = async (e: any) => {
    this._apiService.apiName = 'expenses'
    const response = await this._apiService.getById(e.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(ExpenseFromComponent, {
        header: this._translate.instant('edit_expenses'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllExpenses();
          this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_updated') });
          this._cdr.detectChanges();
        }
      });
    }
  }
}

