import { Discount } from 'src/app/enum/discount';
export interface CustomerGroup {
 id:number
 name :string ,
 discount_type:string ,
 discount_value:number ,
 branches :string ,
 has_tax_exemption:boolean,
 tax_exemption_number : string
}
