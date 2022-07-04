import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
    selector: 'expense-tracker-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    registrationForm = new FormGroup({
        firstName: new FormControl(null, {
            validators: Validators.required,
            updateOn: 'change',
        }),
        lastName: new FormControl(null, {
            validators: Validators.required,
            updateOn: 'change',
        }),
        email: new FormControl(null, {
            validators: [Validators.required, Validators.email],
            updateOn: 'change',
        }),
        password: new FormControl(null, {
            validators: [Validators.required, Validators.minLength(8)],
            updateOn: 'change',
        }),
    });

    validationMessages = {
        firstName: {
            required: 'First name is required',
        },
        lastName: {
            required: 'Last name is required',
        },
        email: {
            required: 'Email is required',
        },
        password: {
            error: {
                required: 'Password is required',
                minLength: 'Password must be at least 8 characters long',
            },
        },
        success: 'Looks good!',
    };

    returnUrl = '/businesses';
    isLoggedIn = false;
    isLoginFailed = false;
    isRegistrationFailed = false;
    roles: string[] = [];
    userAlreadyExists = false;

    constructor(
        private router: Router,
        private authService: AuthService,
        private tokenStorageService: TokenStorageService
    ) {
        if (this.tokenStorageService.getToken()) {
            this.isLoggedIn = true;
            this.router.navigate([this.returnUrl]);
            this.roles = this.tokenStorageService.getUser().roles;
        }
    }

    get f() {
        return this.registrationForm.controls;
    }

    onSubmit() {
        const { firstName, lastName, email, password } = this.f;

        this.userAlreadyExists = false;

        this.authService.register(firstName.value, lastName.value, email.value, password.value).subscribe({
            next: data => {
                this.tokenStorageService.saveToken(data.accessToken);
                this.tokenStorageService.saveUser(data);
                this.isRegistrationFailed = false;
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorageService.getUser().roles;
                this.router.navigate([this.returnUrl]);
            },
            error: err => {
                if (err.status === 400) this.userAlreadyExists = true;
                this.isRegistrationFailed = true;
            },
        });
    }
}
