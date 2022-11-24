import { TaxesFormComponent } from './taxes-form/taxes-form.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ApiService } from '../../../shared/services/api.service';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taxes } from 'src/app/models/taxes.model';

@Component({
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxesComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('taxes');
  taxesList$: Observable<Taxes[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { 
    this._apiService.apiName = 'taxes'
  }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllTaxes();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'tax_type', header: this._translate.instant('tax_type') },
      { field: 'tax_value', header: this._translate.instant('tax_value') },
      { field: 'branches', header: this._translate.instant('branches') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  
  private loadAllTaxes = (): void => {
    this.taxesList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteTaxes = (data: Taxes): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllTaxes();
        this._cdr.detectChanges();
      }
    });
  }


  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(TaxesFormComponent, {
      header: this._translate.instant('add_tax'),
      width: '90%',
      height: '75%',
      dismissableMask: true,
      closable: true,
      closeOnEscape: true,
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllTaxes();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });

  }
}
