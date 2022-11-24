import { SelectItem } from 'primeng/api';

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  templateUrl: "./edit-variant-form.component.html",
  styleUrls: ["./edit-variant-form.component.scss"],
})
export class EditVariantFormComponent implements OnInit {
  rawMaterialForm: FormGroup;

  filteredItemVariants: any[];
  ItemVariants: any[];


  items = [];
  selectedItems = [];
  filteredItems = [];


  categories = [];
  selectedCategories = [];
  filteredCategories = [];

  scrollableCols = [];
  frozenCols = [];
  card = [];

  itemsFormArray: FormArray;



  public itemList: FormArray;
  cols = [];



  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initVariantForm();
    this.itemList = this.rawMaterialForm.get('row_items') as FormArray;
    this.getRawMaterialDiscountType();

    this.card.push(
      {
        item_name: 'TriesteEXTRA GUM PEPPERMINT FLAVOR',
        item_barcode: '45454545454545',
        inputs: [
          {
            key: 'attribute',
            value: 0,
            type: 'multi',
            values: [
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
              {
                id: 4,
                name: "UAE",
              },
              {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              },
            ]
          }, {
            key: 'taxes',
            value: 0,
            type: 'multi',
            values: [
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
              {
                id: 4,
                name: "UAE",
              },
              {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              }, {
                id: 4,
                name: "USA",
              },
            ]
          }
        ]
      }
    );
  }


  private initVariantForm = (): void => {
    const variantGroup = this._fb.group({
      items: [[]],
      categories: [[]],
      variant_id: [''],
      raw_material_discount_type: [''],
      row_items: this._fb.array([])
    });
    this.itemsFormArray.push(variantGroup);
  };

  getRawMaterialDiscountType = (): void => {
 
  };


  filterItemParent(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.ItemVariants.length; i++) {
      const country = this.ItemVariants[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredItemVariants = filtered;
  }



  filterItems(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }
    this.filteredItems = filtered;
  }

  filterCategories(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.categories.length; i++) {
      let category = this.categories[i];
      if (category.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(category);
      }
    }
    this.filteredCategories = filtered;
  }


  submitAdd = (formValues: any): void => {
    if (this.rawMaterialForm.invalid) {
      return;
    }
    // this._apiService.apiName = '';
    // this._apiService.add(formValues).subscribe(() => this._ref.close(true));
    const priceListData: any = { ...formValues };
    console.log(formValues);
  };

  get vf() {
    return this.rawMaterialForm.controls;
  }

  selectItem(e) {
    console.log(e);
    this.addItem(e);
  }

  selectCategory(e) {
    console.log(e);
  }




  // returns all form groups under items
  get itemFormGroup() {
    return this.rawMaterialForm.get('row_items') as FormArray;
  }

  addItem(e) {
    this.itemList.push(this.createItem(e));
  }


  createItem(e): FormGroup {
    console.log(e.name);
    return this._fb.group({
      name: [e.name],
      barcode: [''],
      available_quantity: [''],
      discount_quantity: [''],
      lost_quantity: [''],
      total: ['']
    });
  }

  removeAddressFrom(index: number): void {
    this.itemList.removeAt(index);
    this.itemList.markAsTouched();
  }


  onAddRow() {


    this.card.push(
      {
        item_name: 'GUM PEPPERMINT FLAVOR',
        item_barcode: '45454545454545',
        inputs: [
          {
            key: 'available_quantity',
            value: 40,
            type: 'number',
            disabled: true,
          },
          {
            key: 'discount_quantity',
            value: 0,
            type: 'number',
            disabled: false,
          },
          {
            key: 'lost_quantity',
            value: 0,
            type: 'number',
            disabled: false,
          }, {
            key: 'total',
            value: 0,
            type: 'number',
            disabled: true,
          },
        ]
      });


    // const rowsFields = this.card[0].attributes.map(item =>
    //   Object.assign({}, item, {
    //     value: ''
    //   })
    // );
    // rowsFields.validated = false;
    // console.log(this.card[0]);
    // this.card[0].rows = [...(this.card[0].rows || []), rowsFields];
    // card.isSaved = false;
    // console.log('test', this.card[0]);
  }


}
