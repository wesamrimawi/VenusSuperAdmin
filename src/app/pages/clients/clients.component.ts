import { Router } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import {  Observable, of, Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { Languages } from 'src/app/enum/languages.enum';
@Component({
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class ClientsComponent implements OnInit, OnDestroy {

  clientsList$: Observable<Client[] | any> = of([]);
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: string[] = [];
  tableTitle : string = this._translate.instant('clients');

  constructor(private _translate: TranslateService, private _cdr: ChangeDetectorRef, private _router: Router, private _apiService: ApiService, private readonly _dialogService: DialogService, private readonly _messageService: MessageService) {
    this._apiService.apiName = 'clients';
  }

  ngOnInit(): void {
    this.initTableColsHeader();
    this.loadAllClients();
  }

  private initTableColsHeader = (): void => {
    this.tableCols = [
      { header: this._translate.instant('id'), field: 'id' },
      { header: this._translate.instant('client-name'), field: 'client_name' },
      { header: this._translate.instant('mobile'), field: 'mobile' },
      { header: this._translate.instant('email'), field: 'email' },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  private loadAllClients = (): void => {
    this.clientsList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  showAddDialog = (): void => {
    this.closeDialogSubs = this._dialogService.open(AddClientComponent, {
      header: this._translate.instant('add_client'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      rtl: this._translate.currentLang === Languages.AR,
      baseZIndex: 10000,
      closable: true
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllClients();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }

  manageClientDetails = (data: Client): void => {
    this._router.navigate(['/clientprofile'],{ queryParams: { id: data.id } });
  }

  deleteClient = (data: Client): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllClients();
        this._cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.closeDialogSubs && !this.closeDialogSubs.closed && this.closeDialogSubs.unsubscribe();
  }
}
