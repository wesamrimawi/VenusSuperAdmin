import { User } from './../../../models/user.model';
import { addUserDto } from './../../../dto/add-user.dto';
import { UserGroup } from './../../../models/user-group.model';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './add-user.component.html',
  styleUrls: ['../../pages.component.scss'],
})
export class AddUserComponent implements OnInit {

  userGroups$: Observable<UserGroup[] | any> = of([]);
  selectedUserType: string | any;
  userForm: FormGroup = new FormGroup({});
  editMode: boolean = false;

  constructor(private _config: DynamicDialogConfig, private _apiService: ApiService, private _fb: FormBuilder, private _ref: DynamicDialogRef) {
    this._apiService.apiName = 'users';
  }

  ngOnInit(): void {
    this.initUserForm();
    this.loadUserGroups();
    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillUserForm();
    }
  }

  loadUserGroups = (): void => {
    this._apiService.apiName = 'userroles';
    this.userGroups$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  private fillUserForm = (): void => {
    const details: User = this._config.data.details;
    this.userForm.controls['name'].setValue(details.name);
    this.userForm.controls['username'].setValue(details.username);
    this.userForm.controls['mobile'].setValue(details.mobile);
    this.userForm.controls['email'].setValue(details.email);
    this.userForm.controls['role_id'].setValue(details.role);
    this.userForm.controls['password'].clearValidators();
    this.userForm.controls['confirm_password'].clearValidators();
  }


  initUserForm = (): void => {
    this.userForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm_password: ['', Validators.required],
      mobile: [''],
      email: ['', Validators.email],
      role_id: ['', Validators.required]
    },
      {
        validators: this.mustMatch('password', 'confirm_password')
      });
  }


  enableValidation = (e: any): void => {
    if (!this.editMode) return
    if (e.value) {
      this.userForm.controls['password'].setErrors({ 'password': true });
      this.userForm.controls['confirm_password'].addValidators([Validators.required]);
    } else {
      this.userForm.controls['password'].clearValidators();
      this.userForm.controls['confirm_password'].clearValidators();
    }
  }

  submitAdd = (formValues: any): void => {

    if (this.userForm.invalid) {
      return;
    }

    const data: addUserDto = {
      name: formValues.name,
      username: formValues.username,
      password: formValues.password,
      mobile: formValues.mobile,
      email: formValues.email,
      role_id: formValues.role_id?.id
    }


    if (this.editMode) {
      this._apiService.apiName = 'users';
      const id: number = this._config.data.details.id;
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      this._apiService.apiName = 'users';
      this._apiService.add(data).subscribe(() => this._ref.close(true));
    }
  }

  get vf() {
    return this.userForm.controls;
  }

  mustMatch(password: any, confirm_password: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls['password'];
      const confirmPasswordControl = formGroup.controls['confirm_password'];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['mustMatch']) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}
