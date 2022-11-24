import { DeliveryCompanyFormComponent } from './delivery-company-form/delivery-company-form.component';
import { DeliveryCompany } from './../../../../models/delivery-company';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  templateUrl: './delivery-company.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryCompanyComponent implements OnInit {
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('delivery_company');
  deliveryCompanyList$: Observable<DeliveryCompany[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) {
    this._apiService.apiName = 'delivery-companies'
   }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllDeliveryCompany();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'branches', header: this._translate.instant('branches') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  private loadAllDeliveryCompany = (): void => {
    this.deliveryCompanyList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteDeliveryCompany= (data: DeliveryCompany): void => {
    this._apiService.delete(data.id).subscribe(res => {
      if(res.error_code === 0) {
        this.loadAllDeliveryCompany();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(DeliveryCompanyFormComponent, {
      header: this._translate.instant('add_delivery_company'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        console.log(added)
        this.loadAllDeliveryCompany();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }


  showEditDialog = async (e: any) => {
    const response = await this._apiService.getById(e.id).toPromise();
    console.log(response)
    if (response?.error_code === 0) {
      this._dialogService.open(DeliveryCompanyFormComponent, {
        header: this._translate.instant('edit_delivery_company'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllDeliveryCompany();
          this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_updated') });
          this._cdr.detectChanges();
        }
      });
    }
  }


}
