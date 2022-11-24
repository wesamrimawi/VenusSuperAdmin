import { SuppliersModel } from './../../models/suppliers-model';
import { SuppliersModule } from './suppliers.module';
import { ApiService } from '../../shared/services/api.service';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable, of } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './suppliers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class SuppliersComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  tableTitle : string = this._translate.instant('suppliers');
  tableFilters: string[] = [];
  supplierList$:Observable<SuppliersModel[]|any> = of([])

 
  constructor(private _translate: TranslateService, private _dialogService: DialogService, private _cdr: ChangeDetectorRef, private _messageService: MessageService , private _apiService : ApiService) { }
  ngOnInit(): void {
    this.initTableCols();
    this.loadAllSuppliers()

    this.supplierList$ =of([
    {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },
    {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 1,
      name: 'Mohammad Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'MohammadAhmad AlaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },   {
      id: 100,
      name: 'Zaid Ahmad AlaAdden',
      mobile : '0796854555',
      email : 'alaAdden@gmail.com',
      reference_number:'333-222',
      branches: 'Amman , Abdomen , Madame ',
    },
  ]);
  }  

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header:this._translate.instant('id')},
      { field: 'name', header:this._translate.instant('name')},
      { field: 'mobile', header:this._translate.instant('mobile') },
      { field: 'email', header:this._translate.instant('email') },
      { field: 'reference_number', header:this._translate.instant('reference_number') },
      { field: 'branches', header:this._translate.instant('branches') },
    ];
    this.tableFilters = this.tableCols.map((col) => col.field);
  }

  private loadAllSuppliers = (): void => {
    this.supplierList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteSuppliers = (data:SuppliersModel): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllSuppliers();
        this._cdr.detectChanges();
      }
    });
  }

  openNew = (): void => {
    this.closeDialogSubs = this._dialogService.open(SupplierFormComponent, {
      header: this._translate.instant('add_suppliers'),
      width: '75%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe(added => {
      if (added) {
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }
}
