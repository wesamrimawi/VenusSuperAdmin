import { TreeNode } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { SystemModule } from './../../../models/system-module.model';
import { addModule } from './../../../dto/add-module.dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ApiService } from 'src/app/shared/services/api.service';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './add-system-module.component.html',
  styleUrls: ['../../../pages/pages.component.scss']
})
export class AddSystemModuleComponent implements OnInit {

  systemModuleForm: FormGroup = new FormGroup({});
  editMode: boolean = false;
  systemModulesList$: Observable<TreeNode[] | any> = of([]);
  details: SystemModule | any = null;

  constructor(private _config: DynamicDialogConfig, private _apiService: ApiService, private _fb: FormBuilder, private _ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.initSystemModuleForm();
    this.loadAllSystemModules();
    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.details = this._config.data?.details;
      this.fillTagForm();
    }
  }

  private fillTagForm = (): void => {
    this.systemModuleForm.controls['name'].setValue(this.details.name);
    this.systemModuleForm.controls['parent_module_id'].setValue({ id: this.details.parentModule?.id, label: this.details.parentModule?.name })
  }


  private loadAllSystemModules = (): void => {
    this._apiService.apiName = 'modules/all';
    this.systemModulesList$ = this._apiService.getAll().pipe(map(resp => {
      if (resp.error_code === 0) {
        return this.prepareSystemModulesListTreeNodes(resp.data);
      } else {
        return [];
      }
    }));
  }

  private prepareSystemModulesListTreeNodes = (moduleData: SystemModule[]): TreeNode[] =>
    moduleData.map((sys_module: SystemModule) => ({
      id: sys_module.id, label: sys_module.name, selectable: sys_module.id !== this.details?.id, children: this.prepareSystemModulesListTreeNodes(sys_module?.subModules ?? [])
    }));



  initSystemModuleForm = (): void => {
    this.systemModuleForm = this._fb.group({
      name: ['', Validators.required],
      parent_module_id: [[]],
    });
  }

  submitAdd = (formValues: any): void => {
    if (this.systemModuleForm.invalid) {
      return;
    }

    const parent_id = formValues.parent_module_id.id;
    const data: addModule = {
      name: formValues.name,
      parent_module_id: parent_id
    }

    if (this.editMode) {
      const id: number = this._config.data.details.id;
      this._apiService.apiName = 'modules';
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      this._apiService.apiName = 'modules';
      this._apiService.add(data).subscribe(() => this._ref.close(true));
    }
  }

  get vf() {
    return this.systemModuleForm.controls;
  }
}
