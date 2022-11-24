import { UserGroup } from '../../../models/user-group.model';
import { Permissions } from 'src/app/models/permissions.model';
import { Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ApiService } from 'src/app/shared/services/api.service';
import { AddUserGroupDto } from 'src/app/dto/add-user-group.dto';
import { PermissionsList } from 'src/app/models/permissions-list.model';
import { map, tap, finalize } from 'rxjs/operators';
@Component({
  templateUrl: './add-user-group.component.html',
  styleUrls: ['../../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserGroupComponent implements OnInit {

  userGroupForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;
  listOfPermissions$: Observable<Permissions[] | any> = of([]);
  editMode: boolean = false;
  userGroupDetails: UserGroup | any = {};

  constructor(private _cdr: ChangeDetectorRef, private _config: DynamicDialogConfig, private _apiService: ApiService, private _fb: FormBuilder, private _ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.initUserGroupForm();
    this.loadAllPermissions();
    this.editMode = this._config.data?.editMode ?? false;
    this.userGroupDetails = this._config.data?.details ?? {};
  }

  private initUserGroupForm = (): void => {
    this.userGroupForm = this._fb.group({ name: ['', Validators.required] });
  }

  private createPermissionForm = (permissionId: number): FormGroup => {
    return this._fb.group({
      permission_id: [permissionId, Validators.required],
      read: [0],
      create: [0],
      update: [0],
      delete: [0]
    })
  }

  private loadAllPermissions = (): void => {
    this._apiService.apiName = 'permissions';
    this.listOfPermissions$ = this._apiService.getAll().pipe(
      map(resp => resp.error_code === 0 && resp.data),
      tap(permissions => {
        permissions.forEach((permission: Permissions) => {
          this.userGroupForm.addControl(String(permission.id), this.createPermissionForm(permission.id));
        });
      }),
      finalize(() => this.fillUserGroupForm()));
    this._cdr.detectChanges();
  }

  private fillUserGroupForm = (): void => {

    if (!this.editMode) {
      return;
    }

    this.userGroupForm.controls['name'].setValue(this.userGroupDetails.name);
    this.userGroupDetails.rolePermissions.forEach((role_permission: PermissionsList) => {
      const roleGroup = this.userGroupForm.get(String(role_permission.permission_id)) as FormGroup;
      if (roleGroup) {
        roleGroup.controls['read'].setValue(role_permission.read);
        roleGroup.controls['create'].setValue(role_permission.create);
        roleGroup.controls['update'].setValue(role_permission.update);
        roleGroup.controls['delete'].setValue(role_permission.delete);
      }
    });

  }

  submitAdd = (formValues: any): void => {

    if (this.userGroupForm.invalid) {
      return;
    }

    this.isSubmitted = true;

    const data: AddUserGroupDto = {
      name: formValues.name,
      permissions_list: Object.assign([], formValues)
    }

    data.permissions_list.shift();

    this._apiService.apiName = 'userroles';
    if (this.editMode) {
      const id: number = this.userGroupDetails.id;
      this._apiService.update(data, id).subscribe((resp) => this._ref.close(resp.error_code === 0));
    } else {
      this._apiService.add(data).subscribe((resp) => this._ref.close(resp.error_code === 0));
    }

    this.isSubmitted = false;
  }

  get vf() {
    return this.userGroupForm.controls;
  }

}
