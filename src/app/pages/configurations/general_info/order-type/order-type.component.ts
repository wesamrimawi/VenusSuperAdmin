import { OrderType } from './../../../../models/order-type';
import { OrderTypeFormComponent } from './order-type-form/order-type-form.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Observable, of, Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  templateUrl: './order-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class OrderTypeComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('order_type');
  orderTypeList$: Observable<OrderType[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { 
    this._apiService.apiName ='ordertypes'
  }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllOrderType();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'branches', header: this._translate.instant('branches') },
      { field: 'use_in_order_app', header: this._translate.instant('use_in_order_app') },
      { field: 'service_percentage', header: this._translate.instant('service_percentage') },

    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  private loadAllOrderType  = (): void => {
    this.orderTypeList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteOrderType = (data: OrderType): void => {
    this._apiService.delete(data.id).subscribe(res => {
      if(res.error_code === 0) {
        this.loadAllOrderType();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(OrderTypeFormComponent, {
      header: this._translate.instant('add_order_type'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllOrderType();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }

  showEditDialog = async (e: any) => {
    const response = await this._apiService.getById(e.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(OrderTypeFormComponent, {
        header: this._translate.instant('edit_delivery_rules'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllOrderType();
          this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_updated') });
          this._cdr.detectChanges();
        }
      });
    }
  }

}
