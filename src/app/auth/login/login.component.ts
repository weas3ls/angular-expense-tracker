import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
    selector: 'expense-tracker-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        email: new FormControl(null, {
            validators: [Validators.required, Validators.email],
            updateOn: 'submit',
        }),
        password: new FormControl(null, {
            validators: Validators.required,
            updateOn: 'submit',
        }),
    });
    isLoggedIn = false;
    isLoginFailed = false;
    returnUrl = '/';
    roles: string[] = [];
    invalidCredentials = false;
    userNotFound = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private tokenStorageService: TokenStorageService
    ) {}

    ngOnInit(): void {
        if (this.tokenStorageService.getToken()) {
            this.isLoggedIn = true;
            this.router.navigate([this.returnUrl]);
            this.roles = this.tokenStorageService.getUser().roles;
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/businesses';
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        const { email, password } = this.f;

        this.userNotFound = false;
        this.invalidCredentials = false;

        this.authService.login(email.value, password.value).subscribe({
            next: data => {
                console.log(data);
                this.tokenStorageService.saveToken(data.accessToken);
                this.tokenStorageService.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorageService.getUser().roles;

                this.router.navigate([this.returnUrl]);
            },
            error: err => {
                if (err.status === 401) this.invalidCredentials = true;
                if (err.status === 404) this.userNotFound = true;
                this.isLoginFailed = true;
            },
        });
    }
}
