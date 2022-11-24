import { TranslateService } from '@ngx-translate/core';
import { AddUserGroupComponent } from './add-user-group/add-user-group.component';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ApiService } from '../../shared/services/api.service';
import { Observable, of, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserGroup } from '../../models/user-group.model';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class UserGroupsComponent implements OnInit {

  userGroupList$: Observable<UserGroup[] | any> = of([]);
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any[] = [];
  title = this._translate.instant('user_groups');
  ref: DynamicDialogRef | any;
  filiterGroups: UserGroup[] = [];
  showSmartTableLoader: boolean = false;

  constructor(private _translate: TranslateService, private _cdr: ChangeDetectorRef, private _router: Router, private _apiService: ApiService, private readonly _dialogService: DialogService, private readonly _messageService: MessageService) {
    this._apiService.apiName = 'userroles';
  }

  ngOnInit(): void {
    this.showSmartTableLoader = true;
    this._cdr.detectChanges();
    this.initTableColsHeader();
    this.loadAllUserGroups();
  }

  private initTableColsHeader = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
    ];
    this.filiterGroups = this.tableCols.map((column: any) => column.field);
  }

  private loadAllUserGroups = (): void => {
    this.userGroupList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
    this.showSmartTableLoader = false;
    this._cdr.detectChanges();
  }

  showAddDialog = (): void => {
    this._apiService.apiName = 'userroles';
    this.closeDialogSubs = this._dialogService.open(AddUserGroupComponent, {
      header: this._translate.instant('add_user_groups'),
      width: '60%',
      height: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllUserGroups();
        this._messageService.add({ severity: 'success', summary: 'User Group Successfully Added' });
        this._cdr.detectChanges();
      }
    });
  }

  showEditDialog = async (userGroup: UserGroup) => {
    this._apiService.apiName = 'userroles';
    const response = await this._apiService.getById(userGroup.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(AddUserGroupComponent, {
        header: this._translate.instant('edit_user_group'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllUserGroups();
          this._messageService.add({ severity: 'success', summary: 'User Group successfully Updated' });
          this._cdr.detectChanges();
        }
      });
    }
  }

  deleteUserGroup = (userGroup: UserGroup): void => {
    this._apiService.apiName = 'userroles';
    this._apiService.delete(userGroup.id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllUserGroups();
        this._messageService.add({ severity: 'success', summary: 'User Group Successfully Deleted' });
        this._cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.closeDialogSubs && !this.closeDialogSubs.closed && this.closeDialogSubs.unsubscribe();
  }
}
