import { CouponsFormComponent } from './coupons-form/coupons-form.component';
import { ApiService } from '../../shared/services/api.service';
import { Coupon } from './../../models/coupon.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('coupons');
  couponList$: Observable<Coupon[] | any> = of([]);

  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { }

  ngOnInit(): void {
    this.initTableColsHeader();
    this.loadAllCoupons();
  }

  private initTableColsHeader = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'code', header: this._translate.instant('code') },
      { field: 'quantity', header: this._translate.instant('quantity') },
      { field: 'end_date', header: this._translate.instant('end_date') },
      { field: 'branches', header: this._translate.instant('branches') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  
  private loadAllCoupons = (): void => {
    this.couponList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteCoupons = (data: Coupon): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllCoupons();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(CouponsFormComponent, {
      header: this._translate.instant('add_coupon'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllCoupons();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('user_successfully_added') });
        this._cdr.detectChanges();
      }
    });

  }

  ngOnDestroy(): void {
    this.closeDialogSubs && !this.closeDialogSubs.closed && this.closeDialogSubs.unsubscribe();
  }
}
