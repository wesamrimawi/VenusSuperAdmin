import { ScaleBarcodesModel } from '../../../models/scale-barcodes-model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../shared/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Observable, of, Subscription } from 'rxjs';
import { ScaleBarcodeFormComponent } from './sacle-barcode-form/scale-barcode-form.component';

@Component({
  templateUrl: './scale-barcodes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ScaleBarcodesComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('scale_setting');
  scaleSettingList$: Observable<ScaleBarcodesModel[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { 
    this._apiService.apiName ='scale-barcodes'
  }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllScaleSetting();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'start_of_barcode', header: this._translate.instant('start_of_barcode') },
      { field: 'end_of_barcode', header: this._translate.instant('end_of_barcode') },
      { field: 'number_of_digits', header: this._translate.instant('number_of_digits') },
      { field: 'number_of_digits_before_fraction', header: this._translate.instant('number_of_digits_before_fraction') },
      { field: 'number_of_digits_after_fraction', header: this._translate.instant('number_of_digits_after_fraction') },
      // { field: 'user_id', header: this._translate.instant('user_id') },
      { field: 'branches', header: this._translate.instant('branches') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  
  private loadAllScaleSetting= (): void => {
    this.scaleSettingList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteScaleSetting = (data: ScaleBarcodesModel): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllScaleSetting();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(ScaleBarcodeFormComponent, {
      header: this._translate.instant('add_scale_setting'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,

    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllScaleSetting();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });

  }
}
