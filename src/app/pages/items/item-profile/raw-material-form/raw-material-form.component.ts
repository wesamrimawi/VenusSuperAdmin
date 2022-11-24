import { SelectItem } from 'primeng/api';

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  templateUrl: "./raw-material-form.component.html",
  styleUrls: ["./raw-material-form.component.scss"],
})
export class RawMaterialFormComponent implements OnInit {
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


  public itemList: FormArray;
  cols = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initVariantForm();
    this.itemList = this.rawMaterialForm.get('row_items') as FormArray;
    this.getRawMaterialDiscountType();

    for (let i = 1; i <= 10; i++) {
      this.items.push({
        id: i,
        name: 'Item ' + i
      });


      this.categories.push({
        id: i,
        name: 'Category #' + i
      });
    }

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
    ];

    this.ItemVariants = [
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

    this.scrollableCols = [
      { field: 'available_quantity', header: 'Available Quantity' },
      { field: 'discount_quantity', header: 'Discount Quantity' },
      { field: 'lost_quantity', header: 'Lost Quantity' },
      { field: 'Total', header: 'Total' }
    ];


    this.frozenCols = [
      { field: 'name', header: 'Name' },
      { field: 'barcode', header: 'Barcode' }
    ];
  }

  private initVariantForm = (): void => {
    this.rawMaterialForm = this._fb.group({
      items: [[]],
      categories: [[]],
      variant_id: [''],
      raw_material_discount_type: [''],
      row_items: this._fb.array([])
      // name: [''],
      // barcode: [''],
      // available_quantity: [''],
      // discount_quantity: [''],
      // lost_quantity: [''],
      // total: [''],
    });
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
