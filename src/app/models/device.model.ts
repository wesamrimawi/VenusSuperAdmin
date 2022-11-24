import { Branch } from './branch.model';
import { Product } from './product.model';
export interface Device {
  id: number
  device_name:string,
  product?: Product;
  branches?: Branch[];
  serialNumber: string;
}
