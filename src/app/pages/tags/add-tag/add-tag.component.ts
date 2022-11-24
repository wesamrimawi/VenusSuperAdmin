import { Tag } from './../../../models/tag.model';
import { addTagDto } from './../../../dto/add-tag.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable, of } from 'rxjs';
import { TreeNode } from 'primeng/api';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './add-tag.component.html',
  styleUrls: ['../../pages.component.scss']
})
export class AddTagComponent implements OnInit {

  tagForm: FormGroup = new FormGroup({});
  editMode: boolean = false;
  tagsList$: Observable<TreeNode[] | any> = of([]);
  isSubmitted: boolean = false;
  details: Tag | any = null;
  constructor(private _config: DynamicDialogConfig, private _apiService: ApiService, private _fb: FormBuilder, private _ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.initTagForm();
    this.loadAllTags();
    this.editMode = this._config.data.editMode ?? false;
    if (this.editMode) {
      this.details = this._config.data?.details;
      this.fillTagForm();
    }
  }
  private fillTagForm = (): void => {
    this.tagForm.controls['name'].setValue(this.details.name);
    this.tagForm.controls['parent_tag_id'].setValue({ id: this.details.parentTag?.id, label: this.details.parentTag?.name })
  }

  private loadAllTags = (): void => {
    this._apiService.apiName = 'tags/all';
    this.tagsList$ = this._apiService.getAll().pipe(map(resp => {
      if (resp.error_code === 0) {
        return this.prepareTagListTreeNodes(resp.data);
      } else {
        return [];
      }
    }));
  }

  private prepareTagListTreeNodes = (tagsData: Tag[]): TreeNode[] =>
    tagsData.map((tag: Tag) => ({
      id: tag.id, label: tag.name, selectable: tag.id !== this.details?.id, children: this.prepareTagListTreeNodes(tag?.subTags ?? [])
    }));

  initTagForm = (): void => {
    this.tagForm = this._fb.group({
      name: ['', Validators.required],
      parent_tag_id: [''],
    });
  }

  submitAdd = (formValues: any): void => {
    if (this.tagForm.invalid) {
      return;
    }

    this.isSubmitted = true;
    const parent_id = formValues.parent_tag_id.id;
    const data: addTagDto = {
      name: formValues.name,
      parent_tag_id: parent_id
    }

    if (this.editMode) {
      const id: number = this._config.data.details.id;
      this._apiService.apiName = 'tags';
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      this._apiService.apiName = 'tags';
      this._apiService.add(data).subscribe(() => this._ref.close(true));
    }
  }

  get vf() {
    return this.tagForm.controls;
  }
}
