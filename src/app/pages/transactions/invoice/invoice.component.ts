import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceHTML: string = '';

  constructor(public config: DynamicDialogConfig) {
   }

  ngOnInit(): void {
    this.invoiceHTML = this.config.data;
  }

}
