import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  user_groups: [];
  user_type: [];
  selectedUserType: string;
  branchList: any | [];
  is_superadmin: boolean;
  selectedUserGroup: any[];
  filteredUserGroups: any[];
  UserGroups: any[];

  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef) {}

  ngOnInit() {
    this.initUserForm();
  }

  initUserForm = (): void => {
    this.userForm = this._fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      code: ['', Validators.required],
      confirm_password: ['', Validators.required],
      mobile: [''],
      salary: [''],
      commission: [''],
      email: [''],
      notes: [''],
      address: [''],
      role_id: [''],
      is_superadmin: [false, ''],
      branches: ['' , Validators.required],
      user_group_id:[]
    },
      {
        validators: this.mustMatch('password', 'confirm_password')
      });
  }


  submitAdd = (formValues: any): void => {
    // this._apiService.apiName = 'users';
     // this._apiService.add(userData).subscribe(() => this._ref.close(true));
  }

  get vf() {
    return this.userForm.controls;
  }

  filterUserGroups(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.UserGroups.length; i++) {
      const country = this.UserGroups[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredUserGroups = filtered;
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
