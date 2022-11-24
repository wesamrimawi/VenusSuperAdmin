import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../../shared/services/api.service';
import { Subscription, Observable, of } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VariantFormComponent } from './variant-form/variant-form.component';
import { ItemVariants } from 'src/app/models/item-variants';
import { PurchasesHistory } from 'src/app/models/purchases-history';
import { RawMaterialFormComponent } from './raw-material-form/raw-material-form.component';
import { EditVariantFormComponent } from './edit-variant-form/edit-variant-form.component';
@Component({
  templateUrl: './item-profile.component.html',
  styleUrls: ['./item-profile.component.scss']
})
export class ItemProfileComponent implements OnInit {

  /** Information */
  items: any = [];
  /** Variants */


  closeDialogSubs: Subscription = new Subscription();
  variantsFilters: any[] = [];
  variantsTableTitle: string = this._translate.instant('item_variants');
  variantsTableCols: any[] = [];
  variantsList$: Observable<ItemVariants[] | any> = of([]);
  frozenCols: any[] = [];


  data: any[] = [
    {
      id: 1,
      name: 'TriesteEXTRA GUM PEPPERMINT FLAVOR',
      attributes: '0796854555',
      variant_code: '444',
      scale_barcode: '333-222',
      serials: 'Amman ,Abdomen',
      barcodes: '333-222',
      taxes: '333-222',
      column_number: '333-222',
      row_number: '333-222',
      shelf_number: '333-222',
      warranty_period: '333-222',
      isbn: '333-222',
      sale_item_method: '333-222',
      item_segment: '333-222',
    }, {
      id: 1,
      name: 'TriesteEXTRA GUM PEPPERMINT FLAVOR2323',
      attributes: '0796854555',
      variant_code: '444',
      scale_barcode: '333-222',
      serials: 'Amman ,Abdomen',
      barcodes: '333-222',
      taxes: '333-222',
      column_number: '333-222',
      row_number: '333-222',
      shelf_number: '333-222',
      warranty_period: '333-222',
      isbn: '333-222',
      sale_item_method: '333-222',
      item_segment: '333-222',
    }, {
      id: 1,
      name: 'TriesteEXTRA GUM PEPPERMINT FLAVOR 1212',
      attributes: '0796854555',
      variant_code: '444',
      scale_barcode: '333-222',
      serials: 'Amman ,Abdomen',
      barcodes: '333-222',
      taxes: '333-222',
      column_number: '333-222',
      row_number: '333-222',
      shelf_number: '333-222',
      warranty_period: '333-222',
      isbn: '333-222',
      sale_item_method: '333-222',
      item_segment: '333-222',
    },
  ];

  /** Pricing */
  item_variants: any[] = [];
  pricingVariantsFilters: any[] = [];
  pricingVariantsTableCols: any[] = [];

  /** Images */
  uploadedFiles: any[] = [];

  /** Row Material */

  /** Item Movement */
  itemMovements: any[] = [];
  itemMovementsTitle: string = this._translate.instant('purchases_history');
  itemMovementsFilters: any[] = [];
  itemMovementsTableCols: any[] = [];
  /** Purchase History */
  purchasesHistoryFilters: any[] = [];
  purchasesHistoryTableTitle: string = this._translate.instant('purchases_history');
  purchasesHistoryTableCols: any[] = [];
  purchasesHistoryList$: Observable<PurchasesHistory[] | any> = of([]);

  constructor(private _apiService: ApiService, private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { }

  ngOnInit() {

  /** Information */

    this.items = [
      {
        label: 'Edit', icon: 'pi pi-info', id: 1, command: (e) => {
          this.editItem(e);
        }
      },
      {
        label: 'Delete', icon: 'pi pi-trash', id: 1, command: (e) => {
          this.deleteItem(e)
        }
      }
    ];

    /** Variants */

    this.variantsTableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'attributes', header: this._translate.instant('attributes') },
      { field: 'variant_code', header: this._translate.instant('variant_code') },
      { field: 'scale_barcode', header: this._translate.instant('scale_barcode') },
      { field: 'serials', header: this._translate.instant('serials') },
      { field: 'barcodes', header: this._translate.instant('barcodes') },
      { field: 'taxes', header: this._translate.instant('taxes') },
      { field: 'column_number', header: this._translate.instant('column_number') },
      { field: 'row_number', header: this._translate.instant('row_number') },
      { field: 'shelf_number', header: this._translate.instant('shelf_number') },
      { field: 'warranty_period', header: this._translate.instant('warranty_period') },
      { field: 'isbn', header: this._translate.instant('isbn') },
      { field: 'sale_item_method', header: this._translate.instant('sale_item_method') },
      { field: 'item_segment', header: this._translate.instant('item_segment') },
    ];
    this.variantsFilters = this.variantsTableCols.map((col) => col.field);
    this.frozenCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
    ];

    /** Purchase History */
    this.purchasesHistoryTableCols = [
      { field: 'invoice_number', header: this._translate.instant('invoice_number') },
      { field: 'looping_name', header: this._translate.instant('looping_name') },
      { field: 'purchasing_price', header: this._translate.instant('purchasing_price') },
      { field: 'bonus_quantity', header: this._translate.instant('bonus_quantity') },
      { field: 'total_purchase_price', header: this._translate.instant('total_purchase_price') },
      { field: 'purchase_date', header: this._translate.instant('purchase_date') },
      { field: 'lead_time', header: this._translate.instant('lead_time') },
    ];
    this.purchasesHistoryFilters = this.purchasesHistoryTableCols.map((col) => col.field);



    /** Pricing */
    this.pricingVariantsTableCols = [
      { field: 'branch', header: this._translate.instant('branch') },
      { field: 'sale_price', header: this._translate.instant('sale_price') },
      { field: 'offer_price', header: this._translate.instant('offer_price') },
      { field: 'cost_price', header: this._translate.instant('cost_price') },
      { field: 'safety_stock', header: this._translate.instant('safety_stock') },
      { field: 'lead_time', header: this._translate.instant('lead_time') },
      { field: 'max_quantity_order', header: this._translate.instant('max_quantity_order') },
      { field: 'min_quantity_order', header: this._translate.instant('min_quantity_order') },
      { field: 'quantity', header: this._translate.instant('quantity') },
    ];
    this.pricingVariantsFilters = this.pricingVariantsTableCols.map((col) => col.field);

    this.item_variants = [
      {
        id: 1001,
        name: 'TriesteEXTRA GUM PEPPERMINT FLAVOR',
        main_item: {

        }
      },
      {
        id: 1002,
        name: 'TriesteEXTRA GUM PEPPERMINT FLAVOR 550G',
      },
      {
        id: 1003,
        name: 'TriesteEXTRA GUM PEPPERMINT FLAVOR 1100G',
      },
    ];

    /** Item Movements */
    this.itemMovementsTableCols = [
      { field: 'date', header: this._translate.instant('date') },
      { field: 'invoice_number', header: this._translate.instant('invoice_number') },
      { field: 'transaction', header: this._translate.instant('transaction') },
      { field: 'in_quantity', header: this._translate.instant('in_quantity') },
      { field: 'out_quantity', header: this._translate.instant('out_quantity') },
      { field: 'bonus', header: this._translate.instant('bonus') },
      { field: 'sale_price', header: this._translate.instant('sale_price') },
      { field: 'total', header: this._translate.instant('total') },
      { field: 'balance', header: this._translate.instant('balance') },
      { field: 'purchase price', header: this._translate.instant('purchase price') },
      { field: 'cost', header: this._translate.instant('cost') },
    ];
    this.variantsFilters = this.variantsTableCols.map((col) => col.field);
  }




  /** Items (Main) */
  editItem = (e): void => {
    console.log(e);
  }

  deleteItem = (e): void => {
    console.log(e);
  }


  /**  Variants */


  addNewVariant = (): void => {
    this.closeDialogSubs = this._dialogService.open(VariantFormComponent, {
      header: this._translate.instant('add_variant'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if (added) {
        // this.loadAllVariants();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('user_successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }

  /** Images */
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this._messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  /** Row Materials */
  addNewRowMaterial = (): void => {
    this.closeDialogSubs = this._dialogService.open(RawMaterialFormComponent, {
      header: this._translate.instant('add_row_material'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if (added) {
        // this.loadAllVariants();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('row_material_successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }


  
  /** Row Materials */
  EditAllVariant = (): void => {
    this.closeDialogSubs = this._dialogService.open(EditVariantFormComponent, {
      header: this._translate.instant('edit_items'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if (added) {
        // this.loadAllVariants();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('edit_items_successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }


}