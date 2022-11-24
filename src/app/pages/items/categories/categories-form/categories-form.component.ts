import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  templateUrl: './categories-form.component.html',
})
export class CategoriesFormComponent implements OnInit {

  categoriesForm :FormGroup;
  constructor(private _fb: FormBuilder , private _ref:DynamicDialogRef , private _translate : TranslateService) { }

  ngOnInit(): void {
    this.initCategoriesForm();
    this.getDiscountType()
  }

  getDiscountType = () :void  => {
  }
  private initCategoriesForm = (): void => {
    this.categoriesForm = this._fb.group({
      name :['' , Validators.required] ,
      branches: ['' , Validators.required] ,
      discount_value : [] ,
      taxes : [] ,
      printers : [] ,
      description : [] ,
      show_category_in_ordering_app : [true] ,
      show_category_in_sale_screen : [false] ,
      show_category_in_available_qty_report : [false] ,
      apply_discount_to_sub_category : [] ,
      sub_categoery_id : [] ,
      user_id : [null ,  Validators.required] 
    });
  }

  submitAdd = ( ): void => {
    if (this.categoriesForm.invalid) {
      return;
    }
    // this._apiService.apiName = 'Categories';
    // this._apiService.add(CategoriesData).subscribe(() => this._ref.close(true));
      console.log()
    }
    
    get vf() {
      return this.categoriesForm.controls;
    }

}