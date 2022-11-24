import { ApiService } from '../../../shared/services/api.service';
import { UserGroup } from './../../../models/user-group.model';
import { UserGroupFormComponent } from './user-group-form/user-group-form.component';
import { DialogService } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subscription } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './user-groups.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class UserGroupsComponent implements OnInit {
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  tableFilters: string[] = [];
  tableTitle: string = this._translate.instant('user_groups');
  userGroupList$: Observable<UserGroup[] | any> = of([]);

  constructor(private _translate: TranslateService, private _dialogService: DialogService, private _cdr: ChangeDetectorRef, private _messageService: MessageService , private _apiService : ApiService) { }

  ngOnInit(): void {
  this.loadAllUserGroup()
   this.initTableCols();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'branches', header: this._translate.instant('branches'), },
    ];
    this.tableFilters = this.tableCols.map((col) => col.field);
  }

  private loadAllUserGroup = (): void => {
    this.userGroupList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteCategories = (data:UserGroup): void => {
    this._apiService.delete(data.id).subscribe(resp => {
      if(resp.error_code === 0) {
        this.loadAllUserGroup();
        this._cdr.detectChanges();
      }
    });
  }

  openNew = (): void => {
    this.closeDialogSubs = this._dialogService.open(UserGroupFormComponent, {
      header: this._translate.instant('add_user_group'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllUserGroup();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }
}