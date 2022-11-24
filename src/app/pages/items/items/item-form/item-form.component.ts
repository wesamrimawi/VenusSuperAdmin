import { SelectItem } from "primeng/api";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-brand-form",
  templateUrl: "./item-form.component.html",
  styleUrls: ["./item-form.component.scss"],
})
export class ItemFormComponent implements OnInit {
  itemForm: FormGroup;
  filteredBrands: any[];
  Brands: any[];

  filteredManufacturers: any[];
  Manufacturers: any[];


  
  filteredCategories: any[];
  Categories: any[];

  branchList: any[];
  supplierList: any[];
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initItemForm();
    this.getDiscountType();
    this.getCommissionType();
    this.getItemType();

    this.branchList = [
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
    
    this.Brands = [
      {
        id: 1,
        name: "Apple",
      },
      {
        id: 2,
        name: "Google",
      },
      {
        id: 3,
        name: "Microsoft",
      },
    ];

    this.Manufacturers = [
      {
        id: 1,
        name: "Hamdi Al-Bakri",
      },
      {
        id: 2,
        name: "W & D Apparel",
      },
      {
        id: 3,
        name: "Quality Gateway",
      },
    ];

    this.Categories = [
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

  getDiscountType = (): void => {
   
  };

  getCommissionType = (): void => {
   
  };

  
  getItemType = (): void => {
  };

  private initItemForm = (): void => {
    this.itemForm = this._fb.group({
      name: ["", Validators.required],
      short_description: [""],
      long_description: [""],
      alert_information: [""],
      discount_type: ["NOT_SPECIFIED"],
      discount_value: [0],
      max_discount_value: [0],
      min_sale_price: [0],
      has_serial : [],
      is_group_item : [],
      commission_type: ["not_specified"],
      commission_value: [0],
      item_code: [""],
      brand_id: [""],
      suppliers: [[]],
      manufacture_id: [''],
      category_id: [''],
      branches: [[], Validators.required],
      is_active : [true],
      is_favorite  : [],
      has_stock  : [],
      is_service  : [],
      control_item  : [],
      show_item  : [],
      change_item_name : [],
      change_item_price  : [],
      show_in_customer_records  : [],
      item_type  : ['both'],
    });
  };

  filterBrands(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.Brands.length; i++) {
      const country = this.Brands[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredBrands = filtered;
  }


  filterManufacturers(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.Manufacturers.length; i++) {
      const country = this.Manufacturers[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredManufacturers = filtered;
  }


  filterCategories(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.Categories.length; i++) {
      const country = this.Categories[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredCategories = filtered;
  }

  submitAdd = (formValues: any): void => {
    if (this.itemForm.invalid) {
      return;
    }
    // this._apiService.apiName = '';
    // this._apiService.add(formValues).subscribe(() => this._ref.close(true));
    const priceListData: any = { ...formValues };
    console.log(formValues);
  };

  get vf() {
    return this.itemForm.controls;
  }
}
