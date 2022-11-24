import { Notes } from './../../../../models/notes';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Observable, of, Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  templateUrl: './notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NotesComponent implements OnInit {

  closeDialogSubs: Subscription = new Subscription();
  tableCols: any = [];
  filters: any[] = [];
  tableTitle : string = this._translate.instant('notes');
  notesList$: Observable<Notes[] | any> = of([]);
  
  constructor(private _apiService :ApiService , private _translate: TranslateService, private readonly _dialogService: DialogService, private _cdr: ChangeDetectorRef, private readonly _messageService: MessageService) { 
    this._apiService.apiName = 'notes'
  }

  ngOnInit(): void {
    this.initTableCols();
    this.loadAllNotes();
  }

  private initTableCols = (): void => {
    this.tableCols = [
      { field: 'id', header: this._translate.instant('id') },
      { field: 'name', header: this._translate.instant('name') },
      { field: 'branches', header: this._translate.instant('branches') },
      { field: 'notes_types', header: this._translate.instant('notes_types') },
    ];
    this.filters = this.tableCols.map((el:any)=> el.field)
  }

  private loadAllNotes = (): void => {
    this.notesList$ = this._apiService.getAll().pipe(map(resp => resp.error_code === 0 && resp.data));
  }

  deleteNotes= (data: Notes): void => {
    this._apiService.delete(data.id).subscribe(res => {
      if(res.error_code === 0) {
        this.loadAllNotes();
        this._cdr.detectChanges();
      }
    });
  }

  addNew = ():void =>{
    this.closeDialogSubs = this._dialogService.open(NotesFormComponent, {
      header: this._translate.instant('add_note'),
      width: '90%',
      height: '75%',
      contentStyle: { "overflow-y": "scroll" },
      baseZIndex: 10000,
    }).onClose.subscribe((added) => {
      if(added) {
        this.loadAllNotes();
        this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_added') });
        this._cdr.detectChanges();
      }
    });
  }

  showEditDialog = async (e: any) => {
    const response = await this._apiService.getById(e.id).toPromise();
    console.log(response)
    if (response?.error_code === 0) {
      this._dialogService.open(NotesFormComponent, {
        header: this._translate.instant('edit_notes'),
        width: '50%',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        data: { editMode: true, details: response?.data },
        closable: true
      }).onClose.subscribe(edited => {
        if (edited) {
          this.loadAllNotes();
          this._messageService.add({ severity: 'success', summary: this._translate.instant('successfully_updated') });
          this._cdr.detectChanges();
        }
      });
    }
  }

}
