import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { iUser } from 'src/app/auth/models/user';
import { stateSelect } from 'src/app/shared/constants/stateSelect';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
    selector: 'expense-tracker-business-form',
    templateUrl: './business-form.component.html',
    styleUrls: ['./business-form.component.scss'],
})
export class BusinessFormComponent implements OnInit {
    states = stateSelect;
    user!: iUser;
    url = '';
    maxDate = new Date();

    businessForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        ein: new FormControl('', [Validators.required]),
        dateFounded: new FormControl('', [Validators.required]),
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
