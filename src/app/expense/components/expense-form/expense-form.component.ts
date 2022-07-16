import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { expenseTypesGroups } from '../../constants/ExpenseTypeGroups';

@Component({
    selector: 'expense-tracker-expense-form',
    templateUrl: './expense-form.component.html',
    styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent implements OnInit {
    expenseType = '';

    groups = expenseTypesGroups;
    mileage = '';
    mileage_cost = 0;
    cost_per_mile = 0.56;
    url = '';

    expenseForm: FormGroup = new FormGroup({
        type: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
        title: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
        amount: new FormControl(0, { validators: [Validators.required], updateOn: 'change' }),
        mileage: new FormControl(0),
        description: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
        image: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
    });

    validationMessages = {
        type: {
            required: 'Expense type is required',
        },
        title: {
            required: 'Expense title is required',
        },
        amount: {
            required: 'Expense amount is required',
        },
        description: {
            required: 'Expense description is required',
        },
        image: {
            required: 'Expense image is required',
        },
        success: 'Looks good!',
    };

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.url = this.router.url;
    }

    get f() {
        return this.expenseForm.controls;
    }

    expensesForm(event: any) {
        this.expenseType = event;
    }

    calculateMileage(event: KeyboardEvent) {
        this.mileage = (event.target as HTMLInputElement)?.value;
        this.mileage_cost = +this.mileage * this.cost_per_mile;
    }
}
