import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/businesses';
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        const { email, password } = this.f;

        console.log(this.f);
    }
}
