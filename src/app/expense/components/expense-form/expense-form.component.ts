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
    groups = expenseTypesGroups;
    mileage = '';
    mileage_cost = 0;
    cost_per_mile = 0.56;
    url = '';
    maxDate = new Date();

    expenseForm = new FormGroup({
        type: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
        title: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
        date: new FormControl('', { validators: [Validators.required], updateOn: 'submit' }),
        amount: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
        distance: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
        description: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
        receipt: new FormControl('', { validators: [Validators.required], updateOn: 'submit' }),
    });

    validationMessages = {
        type: {
            required: 'Expense type is required',
        },
        title: {
            required: 'Expense title is required',
        },
        date: {
            required: 'Expense date is required',
        },
        amount: {
            required: 'Expense amount is required',
        },
        distance: {
            required: 'Expense distance is required',
        },
        description: {
            required: 'Expense description is required',
        },
        receipt: {
            required: 'Expense receipt is required',
        },
        success: 'Looks good!',
    };

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.url = this.router.url;
        this.maxDate.setDate(this.maxDate.getDate() + 1);
    }

    get f() {
        return this.expenseForm.controls;
    }

    setValidations(): void {
        if (this.f['type'].value === 'Car Mileage') {
            this.f['distance'].setValidators([Validators.required]);
            this.f['amount'].setValidators(null);
            this.f['amount'].reset();
        } else {
            this.f['distance'].setValidators(null);
            this.f['amount'].setValidators([Validators.required]);
            this.f['distance'].reset();
        }
        this.f['distance'].updateValueAndValidity();
        this.f['amount'].updateValueAndValidity();
    }

    calculateMileage(event: KeyboardEvent) {
        this.mileage = (event.target as HTMLInputElement)?.value;
        this.mileage_cost = +this.mileage * this.cost_per_mile;
    }

    onSubmit() {
        console.log(this.expenseForm.value);
    }
}
