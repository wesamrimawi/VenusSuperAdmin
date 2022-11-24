import { PaymentCard } from './../../../../models/payment-card';
import { PaymantCardFormComponent } from './paymant-card-form/paymant-card-form.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Observable, of, Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  templateUrl: './paymant-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymantCardsComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('payment_cards');
  paymentCardList$: Observable<PaymentCard[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllPaymentCard();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'branches', header: this._translate.instant('branches') },
      { field: 'reference_number', header: this._translate.instant('reference_number') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  private loadAllPaymentCard = (): void => {
    this.paymentCardList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deletePaymentCard= (data: PaymentCard): void => {
    this._apiService.delete(data.id).subscribe(res => {
      if(res.error_code === 0) {
        this.loadAllPaymentCard();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(PaymantCardFormComponent, {
      header: this._translate.instant('add_payment_cards'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllPaymentCard();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }
}
