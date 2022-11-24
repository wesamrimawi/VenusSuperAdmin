import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: "./quick-item-form.component.html",
  styleUrls: ["./quick-item-form.component.scss"],
})
export class QuickItemFormComponent implements OnInit {
  itemsForm: FormArray;
  categoriesList: any[]; // Need Api
  taxesList: any[]; // Need Api
  branchesList: any[]; // Need Api
  suppliersList: any[]; // Need Api
  constructor(private _fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.addAddressFormGroup();
    this.itemsForm = this._fb.array([this.addAddressFormGroup()]);

    this.taxesList = [
      {
        id: 1,
        name: "16",
      },
      {
        id: 2,
        name: "18",
      },
      {
        id: 3,
        name: "21",
      },
    ];

    this.branchesList = [
      {
        id: 1,
        name: "Amman",
      },
      {
        id: 2,
        name: "Iraq",
      },
      {
        id: 3,
        name: "KSA",
      },
    ];

    this.suppliersList = [
      {
        id: 1,
        name: "za",
      },
      {
        id: 2,
        name: "id",
      },
      {
        id: 3,
        name: "dc",
      },

    ];

    this.categoriesList = [
      {
        id: 1,
        name: "Food",
      },
      {
        id: 2,
        name: "Stock",
      },
      {
        id: 3,
        name: "Testing",
      },
    ];
  }

  addAddressFormGroup(): FormGroup {
    return this._fb.group({
       name: ["", Validators.required],
      taxes: [[]],
      categories: ['', Validators.required],
      branches: [[], Validators.required],
      suppliers: [[]],
      sale_price: [0],
      offer_price: [0],
      cost_price: [0],
      purchase_price: [0],
      safety_stock: [0],
    });
  }

  addNewAddressForm(): void {
    this.itemsForm.push(this.addAddressFormGroup());
  }

  submitAddress() {
    console.log(this.itemsForm.value);
  }

  removeAddressFrom(index: number): void {
    this.itemsForm.removeAt(index);
    this.itemsForm.markAsTouched();
  }
}
