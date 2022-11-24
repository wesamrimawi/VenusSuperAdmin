export interface Customers {
    id:number;
    name:string;
    nick_name:string;
    discount:string;
    discount_type:string;
    discount_value:number;
    has_tax_exemption:boolean ;
    tax_exemption_number:string;
    mobile:number;
    max_debit_amount:number;
    balance: number,
    // creditor:number;
    referance_number:string;
    bod:Date;
    anniversary_date:Date;
    gender:string,
    price_list_id: number,
    user_id:number

}
