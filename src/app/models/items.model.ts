import { ManufacturersModel } from './manufacturers-model';
import { CategoriesModel } from './categories-model';
import { BrandModel } from './brand-model';
import { CommissionType } from "../enum/commission_type";
import { DiscountType } from "../enum/discount-type";
import { BranchesModel } from "./branches.model";
import { ItemType } from '../enum/item-type';

export interface ItemsModel {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  alert_information: string;
  discount_type: DiscountType;
  discount_value: number;
  max_discount_value: number;
  min_sale_price: number;
  commission_type: CommissionType;
  commission_value: number;
  branches: BranchesModel[];
  brand: BrandModel;
  manufacturer: ManufacturersModel;
  item_code: string;
  category: CategoriesModel;
  item_type: ItemType;
  is_active: boolean;
  is_favorite: boolean;
  has_stock: boolean;
  is_service: boolean;
  control_item: boolean;
  show_item: boolean;
  change_item_name: boolean;
  change_item_price: boolean;
  show_in_customer_records: boolean;
  has_serial: boolean;
  is_group_item: boolean;
}
