import { ApiService } from 'src/app/shared/services/api.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
import { Notes } from 'src/app/models/notes';

@Component({
  templateUrl: './notes-form.component.html',
})
export class NotesFormComponent implements OnInit {

  notesForm :FormGroup;
  editMode: boolean = false;

  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef ,private _apiService :ApiService , private _config :DynamicDialogConfig) { }

  ngOnInit(): void {
    this.getNotesType()
    this.initNotesForm();

    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillNotesForm();
    }
  }

  private initNotesForm = (): void => {
    this.notesForm = this._fb.group({
     user_id:[null ], //, Validators.required
     branches:[''], // , Validators.required
     name:[''  , Validators.required],
     notes_types:[]
    });
  }

  private fillNotesForm = (): void => {
  }

  getNotesType = ():void =>{
  }

  submitAdd = (formValues: any): void => {
    if (this.notesForm.invalid) {
      return;
    }

    if (this.editMode) {
      const id: number = this._config.data.details.id;
    } else {
    }
  }
    
    get vf() {
      return this.notesForm.controls;
    }

}
