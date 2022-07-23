import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MdbNotificationRef, MdbNotificationService } from 'mdb-angular-ui-kit/notification';

import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
    selector: 'expense-tracker-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    alertRef: MdbNotificationRef<AlertComponent> | null = null;

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
    roles = [];
    invalidCredentials = false;
    userNotFound = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private mdbAlertService: MdbNotificationService
    ) {}

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/businesses';
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.router.navigate([this.returnUrl]);
            this.roles = this.tokenStorage.getUser().roles;
        }
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        const { email, password } = this.f;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            if (email.value === '' || password.value === '') {
                this.alertRef = this.mdbAlertService.open(AlertComponent, {
                    data: { message: 'Please make sure both fields are filled!', type: 'danger' },
                    position: 'bottom-right',
                    stacking: true,
                });
            }
            return;
        }

        this.userNotFound = false;
        this.invalidCredentials = false;

        this.authService.login(email.value, password.value).subscribe({
            next: data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;

                this.alertRef = this.mdbAlertService.open(AlertComponent, {
                    data: { message: `Welcome back, ${data.firstName}!`, type: 'success' },
                });

                this.router.navigate([this.returnUrl]);
            },
            error: err => {
                if (err.status === 401) {
                    this.invalidCredentials = true;
                }
                if (err.status === 404) {
                    this.userNotFound = true;
                    this.loginForm.setErrors({ notUnique: true });
                }
                // this.loginForm.setErrors({ email });
                this.isLoginFailed = true;
            },
        });
    }
}
