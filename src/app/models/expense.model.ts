export interface Expense {
  id: number;
  type: string;
  invoice_number: string;
  reference_number: string;
  amount: number;
  tax_amount: number;
  effect_to: string;
  branch_id: number;
  supplier_id: number;
  expense_type_id: number;
}
