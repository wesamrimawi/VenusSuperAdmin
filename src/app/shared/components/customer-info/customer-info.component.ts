import { AddressInfoComponent } from './../address-info/address-info.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddressType } from 'src/app/enum/address-type';
import { DiscountType } from 'src/app/enum/discount-type';
import { Gender } from 'src/app/enum/gender';
import { TaxExemption } from 'src/app/enum/tax-exemption';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  showAddressDialog :boolean = false
  customerForm: FormGroup = new FormGroup({});
  discountType: SelectItem<DiscountType[] | any>[] = [];
  tax_exemption:SelectItem<TaxExemption[] |any>[] = [];
  gender:SelectItem<Gender[] |any>[] = [];
  type:SelectItem <AddressType[] |any>[] =[]
  addressInfos:any
  addressForm: FormArray;

  @ViewChild(AddressInfoComponent) myData : AddressInfoComponent
  
  ngOnInit(): void {
    this.getDiscountType();
    this.getTaxExemption();
    this.getGender();
    this.getType();
    this.initCustomerForm();
    this.addAddressFormGroup();

    this.addressForm = this._fb.array([this.addAddressFormGroup()]);

  }

  constructor(private _fb: FormBuilder, private _ref: DynamicDialogRef , private _apiService :ApiService , private _translate :TranslateService) { }


  initCustomerForm = (): void => {
    this.customerForm = this._fb.group({
     name:['' , Validators.required],
     nick_name:[''],
     discount_type:[DiscountType.NOT_SPECIFIED],
     discount_value:[null],
     tax_exemption:[TaxExemption.NOT_EXIST],
     tax_exemption_number:[],
     mobile:[null],//multi
     max_debit_amount:[null],
     balance:[],
     refernce_number:[null],
     bod:[null],
     anniversary:[null],
     gender:[Gender.MALE],
     customer_group_id:[],//multi [API]
     address:[]
    });
  }


  addAddressFormGroup():FormGroup {
    return this._fb.group({
      address: [''],
      governorate: [''],
      area: [''],
      street: [''],
      floor_number: [''],
      address_description : [''],
      building_number : [''],
      type: [''], //enum
      
    });
  }

  getDiscountType = ():void =>{
    this.discountType = Object.keys(DiscountType).map(key => ({ label: this._translate.instant(key), value: key }));
  }

  getGender = () :void =>{
    this.gender= Object.keys(Gender).map(key => ({ label: key, value: key }));
  }

  getTaxExemption = ():void =>{
    this.tax_exemption = Object.keys(TaxExemption).map(key => ({ label: this._translate.instant(key), value: key }));
  }

  getType = () :void =>{
    this.type= Object.keys(AddressType).map(key => ({ label: this._translate.instant(key), value: key }));
  }


  addForm(id: number): FormControl[] {
    return this.addressForm[id].controls;
  }

  addNewAddressForm(): void {
    this.addressForm.push(this.addAddressFormGroup());
  }



  
  submitAddress(val){
    const addressData:addressDto = val
    console.log(addressData)
  }

  removeAddressFrom(index: number): void {
    this.addressForm.removeAt(index);
    this.addressForm.markAsTouched();
  }

  submitAdd = (formValues: any): void => {
    this.getDataFromAddressComp()
    if (this.customerForm.invalid) {
      return;
    }
    const customerData:any = {
      name:formValues.name,
      nick_name:formValues.nick_name,
      discount_type:formValues.discount_type,
      discount_value:formValues.discount_value,
      tax_exemption:true,
      tax_exemption_number:formValues.tax_exemption_number,
      mobile:formValues.mobile,
      max_debit: formValues.max_debit_amount,
      balance:formValues.balance,
      referance_number:formValues.refernce_number,
      bod:formValues.bod,
      anniversary:"",
      gender:formValues.gender,
      customer_group_ids:null,
      price_list_id: null,
      user_id:null,
    }    
    this._apiService.apiName = 'customers';
    this._apiService.add(customerData).subscribe(() => this._ref.close(customerData));
    }
    get vf() {
      return this.customerForm.controls;
    }

    addressDialog(){
      this.showAddressDialog = true
    }

    // addressInfo = ($event) =>{
    //   this.addressInfos = $event
    // }

    getDataFromAddressComp(){
      this.addressInfos = this.myData.addressForm.value
    }
  }