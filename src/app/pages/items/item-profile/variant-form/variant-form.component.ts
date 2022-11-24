import { SelectItem } from "primeng/api";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: "./variant-form.component.html",
  styleUrls: ["./variant-form.component.scss"],
})
export class VariantFormComponent implements OnInit {
  variantForm: FormGroup;
  filteredBrands: any[];
  Brands: any[];

  filteredItemParent: any[];
  ItemParents: any[];



  color: string;

  filteredScaleBarcodes: any[];
  ScaleBarcodes: any[];

  filteredCategories: any[];
  Categories: any[];

  branchList: any[];
  serialsList: any[];
  taxesList: any[];
  barcodesList: any[];
  attributeList: any[];
  supplierList: any[];
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initVariantForm();
    this.getDiscountType();
    this.getCommissionType();
    this.getSaleItemMethod();

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

    this.taxesList = [
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

    this.serialsList = [
      {
        id: 1,
        name: "1212121212",
      },
      {
        id: 2,
        name: "2121213123123213",
      },
      {
        id: 3,
        name: "2132132143254435435",
      },
    ];

    this.barcodesList = [
      {
        id: 1,
        name: "000011212121212",
      },
      {
        id: 2,
        name: "000111153123213",
      },
      {
        id: 3,
        name: "222143254435435",
      },
    ];

    this.ScaleBarcodes = [
      {
        id: 1,
        name: "Apple 001",
      },
      {
        id: 2,
        name: "Google 002",
      },
      {
        id: 3,
        name: "Microsoft 003",
      },
    ];

    this.attributeList = [
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

    this.ItemParents = [
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

  getSaleItemMethod = (): void => {
  };

  private initVariantForm = (): void => {
    this.variantForm = this._fb.group({
      name: ["", Validators.required],
      variant_code: [""],
      attributes: [[]],
      taxes: [[]],
      serials: [[]],
      barcodes: [[]],
      scale_barcode_id: [""],
      box_color: [''],
      column_number: [''],
      shelf_number: [''],
      row_number: [''],
      warranty_period: [''],
      isbn: [''],
      sale_item_method: ['piece'],
      parent_id: [],
      show_in_category: [],
      calories: [],
      branches: [[], Validators.required],
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


  filterItemParent(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.ItemParents.length; i++) {
      const country = this.ItemParents[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredItemParent = filtered;
  }


  filterScaleBarcodes(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.ScaleBarcodes.length; i++) {
      const country = this.ScaleBarcodes[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredScaleBarcodes = filtered;
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
    if (this.variantForm.invalid) {
      return;
    }
    // this._apiService.apiName = '';
    // this._apiService.add(formValues).subscribe(() => this._ref.close(true));
    const priceListData: any = { ...formValues };
    console.log(formValues);
  };

  get vf() {
    return this.variantForm.controls;
  }
}
