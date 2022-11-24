import { AddPlanDto } from './../../../dto/add-plan.dto';
import { Plan } from './../../../models/plan.model';
import { SystemModule } from './../../../models/system-module.model';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ApiService } from 'src/app/shared/services/api.service';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './add-plan.component.html',
  styleUrls: ['../../pages.component.scss']
})
export class AddPlanComponent implements OnInit {

  planForm: FormGroup = new FormGroup({});
  systemModulesList$: Observable<SystemModule[] | any> = of([]);
  editMode: boolean = false;

  constructor(private _config: DynamicDialogConfig, private _apiService: ApiService, private _fb: FormBuilder, private _ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.initPlanForm();
    this.loadAllModules();
    this.editMode = this._config.data?.editMode ?? false;

    if (this.editMode) {
      this.fillPlanForm();
    }
  }

  private fillPlanForm = (): void => {
    const details: Plan = this._config.data.details;
    this.planForm.controls['plan_name'].setValue(details.plan_name);
    this.planForm.controls['system_module_ids'].setValue(details.system_modules);
  }

  private loadAllModules = (): void => {
    this._apiService.apiName = 'modules'
    this.systemModulesList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  initPlanForm = (): void => {
    this.planForm = this._fb.group({
      plan_name: ['', Validators.required],
      system_module_ids: [[], Validators.required],
    });
  }

  submitAdd = (formValues: any): void => {
    if (this.planForm.invalid) {
      return;
    }
    const system_modules = formValues.system_module_ids.map((system_module: SystemModule) => system_module.id);
    const data: AddPlanDto = {
      plan_name: formValues.plan_name,
      system_module_ids: system_modules
    }

    this._apiService.apiName = 'plans';
    if (this.editMode) {
      const id: number = this._config.data.details.id;
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      this._apiService.add(data).subscribe(() => this._ref.close(true));
    }
  }

  get vf() {
    return this.planForm.controls;
  }
}
