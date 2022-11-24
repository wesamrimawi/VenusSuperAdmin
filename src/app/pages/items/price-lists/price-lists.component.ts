import { PriceList } from '../../../models/price-list.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../shared/services/api.service';
import { PriceListsFormComponent } from './price-lists-form/price-lists-form.component';

@Component({
  templateUrl: './price-lists.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListsComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('price_list');
  priceList$: Observable< PriceList[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllPriceList();
  }

  private initTableCols= (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'branches', header: this._translate.instant('tax_type') },
      { field: 'order_type', header: this._translate.instant('order_type') },
      { field: 'customer', header: this._translate.instant('customer') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  
  private loadAllPriceList = (): void => {
    this.priceList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteTaxes = (data: PriceList): void => {
    this._apiService.delete(data.id).subscribe(res => {
      if(res.error_code === 0) {
        this.loadAllPriceList();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(PriceListsFormComponent, {
      header: this._translate.instant('add_price_list'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,

    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllPriceList();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });

  }
}
