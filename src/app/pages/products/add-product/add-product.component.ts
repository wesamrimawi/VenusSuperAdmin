import { Product } from './../../../models/product.model';
import { AddProductDto } from './../../../dto/add-product.dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  templateUrl: './add-product.component.html',
  styleUrls: ['../../pages.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});
  editMode: boolean = false;

  constructor(private _config: DynamicDialogConfig,private _apiService: ApiService, private _fb: FormBuilder, private _ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.initProductForm();

    this.editMode = this._config.data.editMode ?? false;

    if (this.editMode) {
      this.fillProductForm();
    }
  }


  private fillProductForm = (): void => {
    const details: Product = this._config.data.details;
    this.productForm.controls['product_name'].setValue(details.product_name);
    this.productForm.controls['model'].setValue(details.model);
    this.productForm.controls['price'].setValue(details.price);
    this.productForm.controls['note'].setValue(details.note);
    this.productForm.controls['guarantee'].setValue(details.guarantee);
  }

  initProductForm = (): void => {
    this.productForm = this._fb.group({
      product_name: ['', Validators.required],
      model: [''],
      price: [0],
      guarantee: [0],
      note: [''],
    });
  }

  submitAdd = (formValues: any): void => {
    if (this.productForm.invalid) {
      return;
    }
    const data : AddProductDto ={
      'product_name' : formValues.product_name ,
      'price' : formValues.price ,
      'guarantee' : formValues.guarantee ,
      'model' : formValues.model ,
      'note' : formValues.note ,
    }

    this._apiService.apiName = 'products';
    if (this.editMode) {
      const id: number = this._config.data.details.id;
      this._apiService.update(data, id).subscribe(() => this._ref.close(true));
    } else {
      this._apiService.add(data).subscribe(() => this._ref.close(true));
    }
  }

  get vf() {
    return this.productForm.controls;
  }

}
