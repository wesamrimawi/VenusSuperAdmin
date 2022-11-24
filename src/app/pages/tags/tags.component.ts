import { ApiService } from './../../shared/services/api.service';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag.model';
import {  Subscription, of, Observable } from 'rxjs';
import { AddTagComponent } from './add-tag/add-tag.component';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class TagsComponent implements OnInit {
  filiterTags:Tag[]= []
  tagsList$: Observable<Tag[] | any> = of([]);

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  title = this._translate.instant('tags_table_title');
  constructor(private _translate: TranslateService, private _cdr: ChangeDetectorRef, private _router: Router, private _apiService: ApiService, private readonly _dialogService: DialogService, private readonly _messageService: MessageService) {
    this._apiService.apiName = 'tags';
  }

  ngOnInit(): void {
    this.initTableColsHeader();
    this.loadAllTags();
  }

  showEditDialog = async (e: any) => {
    this._apiService.apiName = 'tags';
    const response = await this._apiService.getById(e.id).toPromise();
    if (response?.error_code === 0) {
      this._dialogService.open(AddTagComponent, {
        header: this._translate.instant('edit_tag'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllTags();
          this._messageService.add({ severity: 'success', summary: 'plan successfully Updated' });
          this._cdr.detectChanges();
        }
      });
    }
  }


  private initTableColsHeader = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'created_at', header: this._translate.instant('date') },
    ];
    this.filiterTags = this.tableCols.map((el:any)=>el.field)
  }

  private loadAllTags = (): void => {
    this.tagsList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  showAddDialog = (): void => {
    this.closeDialogSubs = this._dialogService.open(AddTagComponent, {
      header: 'Add Data',
      width: '50%',
      height: '50%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000
    }).onClose.subscribe(added => {
      if (added) {
        this.loadAllTags();
        this._messageService.add({ severity: 'success', summary: 'tag successfully added' });
        this._cdr.detectChanges();
      }
    });
  }

  deleteTag = (data: Tag): void => {
    this._apiService.delete(data.id).subscribe((response) => {
      if (response.error_message == 'success') {
        this.loadAllTags();
        this._cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.closeDialogSubs && !this.closeDialogSubs.closed && this.closeDialogSubs.unsubscribe();
  }

}
