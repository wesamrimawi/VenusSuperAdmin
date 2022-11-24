import { Totals } from './../../models/totals.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable, of, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class DashboardComponent implements OnInit, OnDestroy {
  tableCols: any = [];
  filters: string[] = [];
  clientList$: Observable<[] | any> = of([]);
  totalClients: Totals = { total: 0, totalLastWeek: 0 };
  totalStores: Totals = { total: 0, totalLastWeek: 0 };
  totalTransactions: Totals = { total: 0, totalLastWeek: 0 };
  totalAmounts: Totals = { total: 0, totalLastWeek: 0 };
  private totalsSubscription$: Subscription[] = [];

  constructor(private _router: Router, private _cdr: ChangeDetectorRef, private _apiService: ApiService, private _translate: TranslateService) { }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllClients();
    this.loadTotalClients();
    this.loadTotalStores();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'client', sub_field: 'client_name', is_object: true, header: this._translate.instant('client') },
      { field: 'store', sub_field: 'code', is_object: true, header: this._translate.instant('code') },
      { field: 'branch_name', header: this._translate.instant('branch_name') },
      { field: 'activation_date', header: this._translate.instant('activation_date') },
      { field: 'status', header: this._translate.instant('status') },
      { field: 'mainTag', sub_field: 'name', is_object: true, header: this._translate.instant('tag') },
      { field: 'subTag',sub_field:'name' ,is_object: true ,header: this._translate.instant('sub_tag') },
      { field: 'mobile', header: this._translate.instant('mobile') },
      { field: 'expiry_date', header: this._translate.instant('expiry_date') },
      { field: 'business_type', header: this._translate.instant('business_type') },
    ];
    this.filters = this.tableCols.map((el: any) => el.field);
  }

  private loadAllClients = (): void => {
    this._apiService.apiName = 'clients/branches';
    this.clientList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  goToClientProfile = (clientInfo: any): void => {
    if (!clientInfo) return
    this._router.navigate(['/clientprofile'], { queryParams: { id: clientInfo.client?.id } });
  }

  private loadTotalClients = (): void => {
    this._apiService.apiName = 'totals/clients';
    const subscription = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data)).subscribe({
      next: (data) => this.totalClients = data,
      complete: () => this._cdr.detectChanges()
    });
    this.totalsSubscription$.push(subscription);
  }

  private loadTotalStores = (): void => {
    this._apiService.apiName = 'totals/stores';
    const subscription = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data)).subscribe({
      next: (data) => this.totalStores = data,
      complete: () => this._cdr.detectChanges()
    });
    this.totalsSubscription$.push(subscription);
  }

  private loadTotalTransactions = (): void => {
    this._apiService.apiName = 'totals/transactions';
    const subscription = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data)).subscribe({
      next: (data) => this.totalTransactions = data,
      complete: () => this._cdr.detectChanges()
    });
    this.totalsSubscription$.push(subscription);
  }

  private loadTotalAmounts = (): void => {
    this._apiService.apiName = 'totals/amounts';
    const subscription = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data)).subscribe({
      next: (data) => this.totalAmounts = data,
      complete: () => this._cdr.detectChanges()
    });
    this.totalsSubscription$.push(subscription);
  }

  ngOnDestroy(): void {
    if (this.totalsSubscription$) {
      for (const subscription of this.totalsSubscription$) {
        subscription && !subscription.closed && subscription.unsubscribe();
      }
    }
  }
}
