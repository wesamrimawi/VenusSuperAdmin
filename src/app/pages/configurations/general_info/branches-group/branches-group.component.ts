import { BrancheGroupFormComponent } from './branche-group-form/branche-group-form.component';
import { BranchesGroup } from './../../../../models/branches-group';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  templateUrl:'./branches-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BranchesGroupComponent implements OnInit {
  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('branches_group');
  branchesGroupList$: Observable<BranchesGroup[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllBranchesGroup();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'branches', header: this._translate.instant('branches') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  private loadAllBranchesGroup = (): void => {
    this.branchesGroupList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteBranchesGroup= (data: BranchesGroup): void => {
    this._apiService.delete(data.id).subscribe(res => {
      if(res.error_code === 0) {
        this.loadAllBranchesGroup();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(BrancheGroupFormComponent, {
      header: this._translate.instant('add_branches_group'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        console.log(added)
        this.loadAllBranchesGroup();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }
}