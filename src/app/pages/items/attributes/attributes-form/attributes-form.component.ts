import { ApiService } from '../../../../shared/services/api.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './attributes-form.component.html',
})
export class AttributesFormComponent implements OnInit {

  attributeForm :FormGroup;
  editMode :boolean = false ;

  constructor(private _fb: FormBuilder , private _ref : DynamicDialogRef , private _apiService : ApiService , private _config : DynamicDialogConfig) {
    this._apiService.apiName = 'attributes';
  }
  ngOnInit(): void {
    this.initattributeForm() ;

    this.editMode = this._config.data?.editMode ?? false;
    if (this.editMode) {
      this.fillAttributeForm();
    }
  }

  private initattributeForm = (): void => {
    this.attributeForm = this._fb.group({
     name:['' , Validators.required],
     value:[],
     branches:[null],//, Validators.required
     user_id :[null]
    });
  }


  private fillAttributeForm = (): void => {
  }

  submitAdd = (formValues): void => {
    if (this.attributeForm.invalid) {
      return;
    }
  
 
    if (this.editMode) {
      const id: number = this._config.data.details.id;
    } else {
    }
  }

    get vf() {
      return this.attributeForm.controls;
    }

}