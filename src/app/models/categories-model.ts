export interface CategoriesModel {
 id:number
 name :string ,
 branches: string ,
 discount_type : string ,
 discount_value : number ,
 taxes : string ,
 printers : string ,
 description : string ,
 show_category_in_ordering_app : boolean ,
 show_category_in_sale_screen : boolean ,
 show_category_in_available_qty_report : boolean ,
 apply_discount_to_sub_category : boolean ,
 sub_categoery_id : number ,
 user_id : number 
}
