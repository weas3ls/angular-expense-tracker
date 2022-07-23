export interface iBusiness {
    id: number;
    name: string;
    ein: number;
    dateAdded: Date;
    dateFounded: Date;
    lastChange: Date;
    foundedIn: string;
    website?: string;
    description: string;
    numberOfExpenses: number;
}
