export interface AddBranchDto {
  branch_name: string;
  mobile_number: string;
  store_id: number;
  subscription_type: string;
  contract_date: string;
  activation_date: string;
  expiry_date: string;
  address: string;
  country_id: number;
  city_id: number;
  business_type_id: number;
  ref_number: string;
  main_tag_id: number;
  sub_tag_id: number;
  plan_id: number;
  status: string;
  long?: string;
  lat?: string;
  reference_number?:string;
}
