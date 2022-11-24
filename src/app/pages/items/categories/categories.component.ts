import { CategoriesModel } from './../../../models/categories-model';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../shared/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  templateUrl: './categories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CategoriesComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('categories');
  categoriesList$: Observable<CategoriesModel[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllCategories();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'branches', header: this._translate.instant('branches') },
      { field: 'discount_type', header: this._translate.instant('discount_type') },
      { field: 'discount_value', header: this._translate.instant('discount_value') },
      { field: 'taxes', header: this._translate.instant('taxes') },
      { field: 'printers', header: this._translate.instant('printers') },
      { field: 'description', header: this._translate.instant('description') },
      { field: 'show_category_in_ordering_app', header: this._translate.instant('show_category_in_ordering_app') },
      { field: 'show_category_in_sale_screen', header: this._translate.instant('show_category_in_sale_screen') },
      { field: 'show_category_in_available_qty_report', header: this._translate.instant('show_category_in_available_qty_report') },
      { field: 'apply_discount_to_sub_category', header: this._translate.instant('apply_discount_to_sub_category') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  
  private loadAllCategories = (): void => {
    this.categoriesList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteCategories = (data:CategoriesModel): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllCategories();
        this._cdr.detectChanges();
      }
    });
  }


  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(CategoriesFormComponent, {
      header: this._translate.instant('add_category'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllCategories();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });

  }


}
