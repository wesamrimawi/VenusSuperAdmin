import { UsersModule } from './users.module';
import { ApiService } from '../../shared/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { UserFormComponent } from './user-form/user-form.component';
import { Observable, of, Subscription } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { AddUserComponent } from './add-user/add-user.component';
import { User } from './../../models/user.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent implements OnInit {
  filterUsers:User[] = []
  usersList$: Observable<User[] | any> = of([]);
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  constructor(private _translate: TranslateService, private _cdr: ChangeDetectorRef, private _router: Router, private _apiService: ApiService, private readonly _dialogService: DialogService, private readonly _messageService: MessageService) {
    this._apiService.apiName = 'users';
  }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllUsers();
  }



  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'email', header: this._translate.instant('email') },
      { field: 'role',  sub_field: 'name',  is_object: true,  header: this._translate.instant('role') },
    ];
    this.filterUsers = this.tableCols.map((el:any) => el.field)
  }

  private loadAllUsers = (): void => {
    this.usersList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  showAddDialog = (): void => {
    this.closeDialogSubs = this._dialogService.open(AddUserComponent, {
      header: this._translate.instant('add_user'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllUsers();
        this._messageService.add({ severity: 'success', summary: 'user successfully added' });
        this._cdr.detectChanges();
      }
    });
  }

  showEditDialog = async (e: any) => {
    const response = await this._apiService.getById(e.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(AddUserComponent, {
        header: this._translate.instant('edit_user'),
        width: '90%',
        height: '75%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllUsers();
          this._messageService.add({ severity: 'success', summary: 'plan successfully Updated' });
          this._cdr.detectChanges();
        }
      });
    }
  }

  deleteUser = (data: User): void => {
    const id = +data.id;
    this._apiService.delete(id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllUsers();
        this._cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.closeDialogSubs && !this.closeDialogSubs.closed && this.closeDialogSubs.unsubscribe();
  }

}

