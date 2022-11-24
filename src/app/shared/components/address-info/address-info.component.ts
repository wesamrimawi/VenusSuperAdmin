import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss'],
  providers:[DynamicDialogRef ,DynamicDialogConfig ]
})
export class AddressInfoComponent implements OnInit {

  @Output() event = new  EventEmitter<any>()
  showAddressDialog :boolean = false
  addressForm: FormArray;

  
  ngOnInit(): void {
    this.getType();
    this.addAddressFormGroup();
    this.addressForm = this._fb.array([this.addAddressFormGroup()]);
  }

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig,private _fb: FormBuilder, private _ref: DynamicDialogRef , private _apiService :ApiService , private _translate :TranslateService) { }
  addAddressFormGroup():FormGroup {
    return this._fb.group({
      address: [''],
      governorate: [''],
      area: [''],
      street: [''],
      floor_number: [''],
      address_description : [''],
      building_number : [''],
      type: [''], 
    });
  }

  getType = () :void =>{
  }

  addForm(id: number): FormControl[] {
    return this.addressForm[id].controls;
  }

  addNewAddressForm(): void {
    this.addressForm.push(this.addAddressFormGroup());
  }
  submitAddress(val){
   
    // console.log(this.addressData);
    // this.sendData(this.addressData)
  }
  // sendData = (val) =>{
  //    this.event.emit(val)
  // }

  removeAddressFrom(index: number): void {
    this.addressForm.removeAt(index);
    this.addressForm.markAsTouched();
  }

  // submitAdd = (formValues: any): void => {
  //   if (this.customerForm.invalid) {
  //     return;
  //   }

  //   const customerData:AddCustomersDto = {...formValues}
  //   // this._apiService.apiName = 'customers';
  //   // this._apiService.add(customerData).subscribe(() => this._ref.close(true));
  //   console.log(customerData)
  //   }
    // get vf() {
    //   return this.customerForm.controls;
    // }

    // addressDialog(){
    //   this.showAddressDialog = true;
    //   this.sendData(this.addressData)
    // }
  }