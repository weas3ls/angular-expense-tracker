import { iExpenseSubType } from './expense-sub-type';

export interface iExpenseType {
    name: string;
    subType: iExpenseSubType[];
}
