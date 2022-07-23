import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith, tap } from 'rxjs';

import { expenseTypes } from '../../constants/ExpenseTypes';

@Component({
    selector: 'expense-tracker-expense-form',
    templateUrl: './expense-form.component.html',
    styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent implements OnInit {
    expenseTypes: { name: string; type: string }[] = [];

    filteredExpenseTypes: Observable<{ name: string; type: string }[]> | undefined;
    notFound = false;

    mileage = '';
    mileage_cost = 0;
    cost_per_mile = 0.56;
    url = '';
    maxDate = new Date();

    expenseForm = new FormGroup({
        type: new FormControl('', [Validators.required]),
        title: new FormControl('', [Validators.required]),
        date: new FormControl('', { validators: [Validators.required], updateOn: 'submit' }),
        amount: new FormControl('', [Validators.required]),
        distance: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
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

    constructor(private router: Router, private el: ElementRef) {
        expenseTypes.forEach(type =>
            type.subType.forEach(subType => this.expenseTypes?.push({ name: subType.name, type: type.name }))
        );

        this.filteredExpenseTypes = this.f['type'].valueChanges.pipe(
            startWith(''),
            map((value: string) => this._filterExpenseTypes(value)),
            tap((results: { name: string; type: string }[]) =>
                results.length > 0 ? (this.notFound = false) : (this.notFound = true)
            )
        );
    }

    private _filterExpenseTypes(value: string) {
        const filterValue = value.toLowerCase();

        if (filterValue) return this.expenseTypes.filter(type => type.name.toLowerCase().includes(filterValue));
        return this.expenseTypes;
    }

    displayValue(value: { name: string; type: string }): string {
        return value ? value.name : '';
    }

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
        if (this.expenseForm.invalid) {
            for (const key of Object.keys(this.f)) {
                if (this.f[key].invalid) {
                    const invalidControl = this.el.nativeElement.querySelector(`[formControlName=${key}]`);
                    invalidControl.focus();
                    break;
                }
            }
        }
    }
}
