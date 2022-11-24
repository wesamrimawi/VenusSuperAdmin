import { map } from 'rxjs/operators';
import { ApiService } from '../../../shared/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Observable, of, Subscription } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ItemFormComponent } from './item-form/item-form.component';
import { QuickItemFormComponent } from './quick-item-form/quick-item-form.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle: string = this._translate.instant('items');
  itemList$: Observable<[] | any> = of([]);

  constructor(private _apiService: ApiService, private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) {
  }

  ngOnInit(): void {
    this.initTableColsHeader();
    this.loadAllItemList();
  }

  private initTableColsHeader = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'discount_value ', header: this._translate.instant('discount_value ') },
      { field: 'discount_type ', header: this._translate.instant('discount_type ') },
      { field: 'branches', header: this._translate.instant('branches') },

    ];
    this.filters = this.tableCols.map((el: any) => el.field)
  }

  private loadAllItemList = (): void => {
    this.itemList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }


  deleteBrand = (data: any): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if (resp.error_code === 0) {
        this.loadAllItemList();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = (): void => {
    this.closeDialogSubs = this._dialogService.open(ItemFormComponent, {
      header: this._translate.instant('add_item'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if (added) {
        this.loadAllItemList();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('item_successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }



  addNewQuick = (): void => {
    this.closeDialogSubs = this._dialogService.open(QuickItemFormComponent, {
      header: 'Quick ' + this._translate.instant('add_item'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if (added) {
        this.loadAllItemList();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('item_successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }
}
