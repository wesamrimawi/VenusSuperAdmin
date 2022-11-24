import { ApiService } from '../../../shared/services/api.service';
import { ExpenseTypeFromComponent } from './expense-type-from/expense-type-from.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable, of } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { ExpensesTypeModel } from 'src/app/models/expenses-type-model';
@Component({
  templateUrl: './expense-types.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class ExpenseTypesComponent implements OnInit {
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  tableTitle: string = this._translate.instant('expenses_type');
  tableFilters: string[] = [];
  expensesTypeList$: Observable<ExpensesTypeModel[]|any> = of([])
  constructor(private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllExpensesType();
  }

  initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'type', header: this._translate.instant('type') },
      { field: 'name', header: this._translate.instant('name') },
      // { field: 'branches', header: this._translate.instant('branches') },
    ];
    this.tableFilters = this.tableCols.map((col) => col.field);
  }

  private loadAllExpensesType = (): void => {
    this._apiService.apiName = 'expensetypes'
    this.expensesTypeList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteExpensesType = (data: ExpensesTypeModel): void => {
    this._apiService.delete(data.id).subscribe(res => {
      if (res.error_code === 0) {
        this.loadAllExpensesType();
        this._cdr.detectChanges();
      }
    });
  }

  openNew = (): void => {
    this.closeDialogSubs = this._dialogService.open(ExpenseTypeFromComponent, {
      header: this._translate.instant('expenses_type'),
      width: '75%',
      height: '50%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllExpensesType()
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }

  showEditDialog = async (e: any) => {
    this._apiService.apiName = 'expensetypes'
    const response = await this._apiService.getById(e.id).toPromise();
    console.log(response)
    if (response?.error_code === 0) {
      this._dialogService.open(ExpenseTypeFromComponent, {
        header: this._translate.instant('edit_expenses_type'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllExpensesType();
          this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_updated') });
          this._cdr.detectChanges();
        }
      });
    }
  }

}
