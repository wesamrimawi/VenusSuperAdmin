import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ApiService } from './../../shared/services/api.service';
import { Plan } from './../../models/plan.model';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class PlansComponent implements OnInit {
  filiterPlan : Plan[] = []
  plansList$: Observable<Plan[] | any> = of([]);
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  title = this._translate.instant('plans_table_title');

  constructor(private _translate: TranslateService, private _cdr: ChangeDetectorRef, private _router: Router, private _apiService: ApiService, private readonly _dialogService: DialogService, private readonly _messageService: MessageService) {
    this._apiService.apiName = 'plans';
  }

  ngOnInit(): void {
    this.initColsPlans();
    this.loadAllPlans();
  }

  showEditDialog = async (e: any) => {
    const response = await this._apiService.getById(e.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(AddPlanComponent, {
        header: this._translate.instant('edit_plan'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllPlans();
          this._messageService.add({ severity: 'success', summary: 'plan successfully Updated' });
          this._cdr.detectChanges();
        }
      });
    }
  }

  private initColsPlans = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'plan_name', header: this._translate.instant('name') },
      { field: 'created_at', header: this._translate.instant('date') }
    ];
    this.filiterPlan = this.tableCols.map((el:any) => el.field)
  }

  private loadAllPlans = (): void => {
    this.plansList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }



  showAddDialog = (): void => {
    this.closeDialogSubs = this._dialogService.open(AddPlanComponent, {
      header: this._translate.instant('add_plans'),
      width: '65%',
      height: '85%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllPlans();
        this._messageService.add({ severity: 'success', summary: 'plan successfully added' });
        this._cdr.detectChanges();
      }
    });
  }

  deletePlan = (data: Plan): void => {
    this._apiService.delete(data.id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllPlans();
        this._cdr.detectChanges();
      }
    })
  }

  ngOnDestroy(): void {
    this.closeDialogSubs && !this.closeDialogSubs.closed && this.closeDialogSubs.unsubscribe();
  }

}
