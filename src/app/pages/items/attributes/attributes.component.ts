import { Attributes } from './../../../models/attributes-model';
import { AttributesFormComponent } from './attributes-form/attributes-form.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './attributes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AttributesComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('attributes');
  attributesList$: Observable<Attributes[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) {
    this._apiService.apiName ='attributes'
   }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllAttributes();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'value', header: this._translate.instant('value') },
      { field: 'branches', header: this._translate.instant('branches') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  
  private loadAllAttributes = (): void => {
    this.attributesList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteAttributes = (data: Attributes): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllAttributes();
        this._cdr.detectChanges();
      }
    });
  }


  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(AttributesFormComponent, {
      header: this._translate.instant('add_attributes'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllAttributes();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }

  showEditDialog = async (e: any) => {
    const response = await this._apiService.getById(e.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(AttributesFormComponent, {
        header: this._translate.instant('edit_delivery_rules'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllAttributes();
          this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_updated') });
          this._cdr.detectChanges();
        }
      });
    }
  }

}