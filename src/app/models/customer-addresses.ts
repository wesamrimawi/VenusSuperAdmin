import { AddressType } from "../enum/address-type";

export interface CustomerAddresses {
    id: number;
    address: string,
    type: AddressType;
    address_description: string
    building_number: number
    floor_number: number
    street: string
    area: string
    governorate: string
}
