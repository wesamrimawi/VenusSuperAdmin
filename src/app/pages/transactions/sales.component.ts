import { ApiService } from '../../shared/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable, of } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Expense } from 'src/app/models/expense.model';
import { InvoiceComponent } from './invoice/invoice.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  tableTitle: string = this._translate.instant('transactionTap');
  tableFilters: string[] = [];
  transactionList$: Observable<Expense[] | any> = of([]);
  mobileFlage: boolean = false;

  invoiceHTML: string = '';

  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';
  
  readonly breakpoint$ = this.breakpointObserver
    .observe(['(min-width: 820px)'])
    .pipe(
      tap(),
      distinctUntilChanged()
    );

  constructor(private _apiService: ApiService, private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService,private breakpointObserver: BreakpointObserver) {
  }


  ngOnInit(): void {
    this.initTableCols();
    this.loadAllExpenses();
    this.breakpoint$.subscribe(() =>
    this.breakpointChanged()
  );
  }

  private initTableCols = (): void => {

    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'invoice_number', header: this._translate.instant('invoice_number') },
      { field: 'sale_date', header: this._translate.instant('sale_date') },
      { field: 'customer_name', header: this._translate.instant('customer_name') },
      { field: 'total_tax', header: this._translate.instant('total_tax') },
      { field: 'total_discount', header: this._translate.instant('total_discount') },
      { field: 'sub_total', header: this._translate.instant('sub_total') },
      { field: 'total', header: this._translate.instant('total') },
      { field: 'sale_status', header: this._translate.instant('sale_status') },
    ];
    this.tableFilters = this.tableCols.map((col) => col.field);
  }

  private loadAllExpenses = (): void => {
    this._apiService.apiName = "transactions";
    this.transactionList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteExpenses = (data: Expense): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if (resp.error_code === 0) {
        this.loadAllExpenses();
        this._cdr.detectChanges();
      }
    });
  }

  selectInvoice = (item): void => {
    if (this.mobileFlage) {
      this.closeDialogSubs = this._dialogService.open(InvoiceComponent, {
        header: this._translate.instant('Invoive'),
        width: '75%',
        height: '75%',
        contentStyle: { "overflow-y": "scroll" },
        baseZIndex: 10000,
        data: item.invoice_html,
      }).onClose.subscribe(item => {
        console.log(item);
      });
    }
    else{
      this.invoiceHTML = item.invoice_html
    }
  }

  private breakpointChanged() {
    if(!this.breakpointObserver.isMatched('(min-width: 820px)')) this.mobileFlage = true
    else this.mobileFlage = false
  }

}
