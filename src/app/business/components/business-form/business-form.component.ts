import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, startWith, tap } from 'rxjs';

import { iUser } from 'src/app/auth/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage/token-storage.service';
import { states } from 'src/app/shared/constants/states';
import { iState } from 'src/app/shared/models/state';

@Component({
    selector: 'expense-tracker-business-form',
    templateUrl: './business-form.component.html',
    styleUrls: ['./business-form.component.scss'],
})
export class BusinessFormComponent implements OnInit {
    states = states;
    filteredStates: Observable<iState[]> | undefined;
    notFound = false;

    user!: iUser;
    url = '';
    maxDate = new Date();

    businessForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        ein: new FormControl('', [Validators.required]),
        dateFounded: new FormControl('', { validators: [Validators.required], updateOn: 'submit' }),
        foundedIn: new FormControl('', [Validators.required]),
        website: new FormControl(''),
        description: new FormControl('', [Validators.required]),
    });

    validationMessages = {
        name: {
            required: 'Business name is required',
        },
        ein: {
            required: 'Business EIN is required',
        },
        dateFounded: {
            required: 'Business date founded is required',
        },
        foundedIn: {
            required: 'State founded in is required',
        },
        description: {
            required: 'Business description is required',
        },
        success: 'Looks good!',
    };

    constructor(
        private router: Router,
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private el: ElementRef
    ) {
        this.user = this.tokenStorage.getUser();

        this.filteredStates = this.f['foundedIn'].valueChanges.pipe(
            startWith(''),
            map((value: string) => this._filterStates(value)),
            tap((results: iState[]) => (results.length > 0 ? (this.notFound = false) : (this.notFound = true)))
        );
    }

    private _filterStates(value: string): iState[] {
        const filterValue = value.toLowerCase();

        if (filterValue) return this.states.filter((item: iState) => item.name.toLowerCase().includes(filterValue));

        return this.states;
    }

    ngOnInit(): void {
        this.url = this.router.url;
        this.maxDate.setDate(this.maxDate.getDate() + 1);
    }

    get f() {
        return this.businessForm.controls;
    }

    onSubmit() {
        console.log('hello');
        console.log(this.f);
        if (this.businessForm.invalid) {
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
