import { Product } from './../../models/product.model';
import { ApiService } from './../../shared/services/api.service';
import { Router } from '@angular/router';
import {  of, Subscription, Observable } from 'rxjs';
import { AddProductComponent } from './add-product/add-product.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductsComponent implements OnInit {
  filiterProducts : Product[] = []
  productsList$: Observable<Product[] | any> = of([]);
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  productInfo: Product = {
    id: 0,
    product_name: '',
    model: '',
    price: 0,
    note: '',
    guarantee: '',
    created_date: ''
  };
  title = this._translate.instant('product_table_title');

  constructor(private _translate: TranslateService, private _cdr: ChangeDetectorRef, private _router: Router, private _apiService: ApiService, private readonly _dialogService: DialogService, private readonly _messageService: MessageService) {
    this._apiService.apiName = 'products';
  }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllProducts();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'product_name', header: this._translate.instant('name') },
      { field: 'model', header: this._translate.instant('model') },
      { field: 'price', header: this._translate.instant('price') },
      { field: 'guarantee', header: this._translate.instant('guarantee') },
      { field: 'note', header: this._translate.instant('note') },
      { field: 'created_at', header: this._translate.instant('date') },
    ];
    this.filiterProducts = this.tableCols.map((el:any)=> el.field)
  }

  private loadAllProducts = (): void => {
    this.productsList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }




  showAddDialog = (): void => {
    this.closeDialogSubs = this._dialogService.open(AddProductComponent, {
      header: this._translate.instant('add_product'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllProducts();
        this._messageService.add({ severity: 'success', summary: 'product successfully added' });
        this._cdr.detectChanges();
      }
    });
  }

  showEditDialog = async (e: any) => {
    const response = await this._apiService.getById(e.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(AddProductComponent, {
        header: this._translate.instant('edit_product'),
        width: '90%',
        height: '75%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data},
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllProducts();
          this._messageService.add({ severity: 'success', summary: 'Product Successfully Updated' });
          this._cdr.detectChanges();
        }
      });
    }
  }


  deleteProduct = (data: Product): void => {
    this._apiService.delete(data.id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllProducts();
        this._cdr.detectChanges();
      }
    })
  }
  

  manageClientDetails = (): void => {
    this._router.navigate(['/user_profile']);
  }



  ngOnDestroy(): void {
    this.closeDialogSubs && !this.closeDialogSubs.closed && this.closeDialogSubs.unsubscribe();
  }
}
