import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: './user-group-form.component.html',
})
export class UserGroupFormComponent implements OnInit {

  userGroupForm: FormGroup = new FormGroup({});
  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef) {

}

  ngOnInit(): void {
    this.initUserGroupForm();
  }

  initUserGroupForm = (): void => {
    this.userGroupForm = this._fb.group({
      name: ['', Validators.required],
      branches: [[], Validators.required],
      system_modules:[[], Validators.required],
    });
  }

  submitAdd = (formValues: any): void => {
    // this._apiService.apiName = 'taxes';
    if (this.userGroupForm.invalid) {
      return;
    }
    // this._apiService.add(userGroupData).subscribe(() => this._ref.close(true));
    }

  get vf() {
    return this.userGroupForm.controls;
  }

}
