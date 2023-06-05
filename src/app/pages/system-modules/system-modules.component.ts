import { TranslateService } from '@ngx-translate/core';
import { SystemModule } from './../../models/system-module.model';
import { ApiService } from './../../shared/services/api.service';
import { Router } from '@angular/router';
import { Subscription, of, Observable } from 'rxjs';
import { AddSystemModuleComponent } from './add-system-module/add-system-module.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Languages } from 'src/app/enum/languages.enum';
@Component({
  templateUrl: './system-modules.component.html',
  styleUrls: ['./system-modules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class SystemModulesComponent implements OnInit {
  filiterModules :SystemModule[] = []
  systemModulesList$: Observable<SystemModule[] | any> = of([]);
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  title = this._translate.instant('system_module_table_title');

  constructor(private _translate: TranslateService, private _cdr: ChangeDetectorRef, private _router: Router, private _apiService: ApiService, private readonly _dialogService: DialogService, private readonly _messageService: MessageService) {
    this._apiService.apiName = 'modules';
  }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllModules();
  }


  private initTableCols = (): void => {
    this.tableCols = [
      { header: this._translate.instant('id'), field: 'id' },
      { header: this._translate.instant('name'), field: 'name' },
      { header: this._translate.instant('creation_date'), field: 'created_at' },
    ];
    this.filiterModules = this.tableCols.map((el:any)=>el.field)
  }

  private loadAllModules = (): void => {
    this.systemModulesList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  showAddDialog = (): void => {
    this.closeDialogSubs = this._dialogService.open(AddSystemModuleComponent, {
      header: this._translate.instant('add_system_module'),
      width: '90%',
        height: '60%',
        contentStyle: { "overflow-y": "scroll" },
        rtl: this._translate.currentLang === Languages.AR,
        baseZIndex: 10000,
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllModules();
        this._messageService.add({ severity: 'success', summary: 'module successfully added' });
        this._cdr.detectChanges();
      }
    });
  }


  
  showEditDialog = async (e: any) => {
    this._apiService.apiName = 'modules';
    const response = await this._apiService.getById(e.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(AddSystemModuleComponent, {
        header: this._translate.instant('edit_module'),
        width: '90%',
        height: '60%',
        contentStyle: { "overflow-y": "scroll" },
        rtl: this._translate.currentLang === Languages.AR,
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllModules();
          this._messageService.add({ severity: 'success', summary: 'System Module successfully Updated' });
          this._cdr.detectChanges();
        }
      });
    }
  }

  deleteModule = (data: SystemModule): void => {
    this._apiService.apiName = 'modules';
    this._apiService.delete(data.id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllModules();
        this._cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.closeDialogSubs && !this.closeDialogSubs.closed && this.closeDialogSubs.unsubscribe();
  }

}
