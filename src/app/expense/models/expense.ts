export interface Expense {
    type: string;
    subType: string;
    title: string;
    amount: number;
    mileage?: number;
    description: string;
    receipt: string;
}
