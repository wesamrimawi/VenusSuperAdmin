import { Tag } from './tag.model';
export interface Branch {
  id: number;
  branch_name: string;
  mobile: string;
  store: number;
  subscriptionType: string;
  contract_date: Date;
  activation_date: Date;
  expiry_date: Date;
  address: string;
  country: number;
  city: number;
  businessType: number;
  refNumber: number;
  plan: number;
  status: string;
  long: string;
  lat: string;
  mainTag ?: Tag;
  subTag: Tag;
}
