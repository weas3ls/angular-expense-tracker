export interface Expense {
    id: number;
    type: string;
    subType: string;
    date: Date;
    dateAdded: Date;
    title: string;
    amount: number;
    mileage?: number;
    description: string;
    receipt: string;
}
