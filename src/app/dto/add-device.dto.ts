export interface AddDeviceDto {
  device_name: string;
  product_id: number;
  serial_number: string;
  branch_ids?:[];
}
