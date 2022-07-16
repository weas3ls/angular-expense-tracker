import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { expenseTypesGroups } from '../../constants/ExpenseTypeGroups';

@Component({
    selector: 'expense-tracker-expense-form',
    templateUrl: './expense-form.component.html',
    styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent implements OnInit {
    expenseType: string = '';

    groups = expenseTypesGroups;
    mileage: number = 0;
    mileage_cost: number = 0;
    cost_per_mile: number = 0.56;
    public url: string = '';

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.url = this.router.url;
    }

    expensesForm(event: any) {
        this.expenseType = event;
        console.log(this.expenseType);
    }

    calculateMileage(event: any) {
        this.mileage = event.target.value;
        this.mileage_cost = this.mileage * this.cost_per_mile;
    }
}
