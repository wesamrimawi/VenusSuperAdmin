import { ManufacturerFormComponent } from './manufacturer-form/manufacturer-form.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../shared/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Observable, of, Subscription } from 'rxjs';
import { ManufacturersModel } from 'src/app/models/manufacturers-model';

@Component({
  templateUrl: './manufacturer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ManufacturerComponent implements OnInit {
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('manufacturer');
  manufacturingList$: Observable<ManufacturersModel[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllManufacturing();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      // { field: 'user_id', header: this._translate.instant('user_id') },
      { field: 'branches', header: this._translate.instant('branches') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  
  private loadAllManufacturing = (): void => {
    this.manufacturingList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteManufacturing = (data: ManufacturersModel): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllManufacturing();
        this._cdr.detectChanges();
      }
    });
  }


  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(ManufacturerFormComponent, {
      header: this._translate.instant('add_manufacturer'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllManufacturing();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });

  }
}