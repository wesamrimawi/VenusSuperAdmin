import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

interface SmartTableCols {
  header: string;
  field: any;
  sub_field:any;
  is_object:boolean;
  is_array:boolean;
}

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartTableComponent implements OnInit {

  @Input('title') tableTitle: string = 'Table Title';
  @Input('showTitle') showTitle: boolean = true;
  @Input('showSearch') showSearch: boolean = true;

  @Input('frozenCols') frozenCols: any[] = [];
  
  @Input('data') tableData: any[] = [];
  @Input('columns') tableColumns: SmartTableCols[] = [];
  @Input('numberOfRows') rows: number = 10;
  @Input('filters') filterKeys: any[] = [];
  @Input('lazyMode') lazyMode: boolean = false;
  @Input('showLoader') showLoader: boolean = false;
  @Input('noDataText') noDataText: string = 'No Data Available';
  @Input('totalRows') numberOfTotalRecords: number = 0;
  @Input('showPager') tablePager: boolean = true;
  @Input('manageButton') manageButton: boolean = false;

  @Input('deleteButton') deleteButton: boolean = true;
  @Input('editButton') editButton: boolean = true;

  @Output('manageClicked') manageClickedEvent: EventEmitter<any> = new EventEmitter();
  @Output('editClicked') editClickedEvent: EventEmitter<any> = new EventEmitter();
  @Output('deleteClicked') deleteClickedEvent: EventEmitter<any> = new EventEmitter();

  selectedProducts = [];



  constructor() { }

  ngOnInit(): void {
  }

  manageButtonClicked = (rowData: any): void => {
    this.manageClickedEvent.emit(rowData);
  }

  editButtonClicked = (rowData: any): void => {
    this.editClickedEvent.emit(rowData);
  }

  deleteButtonClicked = (rowData: any): void => {
    this.deleteClickedEvent.emit(rowData);
  }

  checkDataIsEmpty = (): boolean => this.tableData?.length > 0 && this.tablePager;
}
