import { Taxes } from 'src/app/models/taxes.model';
import { Attributes } from "./attributes-model";
import { ItemBarcodes } from "./item-barcodes";
import { ItemSerials } from "./item-serials";
import { ScaleBarcodesModel } from "./scale-barcodes-model";

export interface ItemVariants {
    id: number;
    name: string;
    attributes: Attributes ;
    variant_code: string;
    scale_barcode: ScaleBarcodesModel ;
    box_color: string ;
    barcodes: ItemBarcodes ;
    serials: ItemSerials  ;
    taxes:Taxes  ;
    column_number:number  ;
    row_number:number  ;
    shelf_number:number  ;
    warranty_period:number  ;
    isbn:  string;
    parent:  ItemVariants;
    calories:  number;
    show_in_category :  boolean;
}
