import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { iUser } from 'src/app/auth/models/user';
import { stateSelect } from 'src/app/shared/constants/stateSelect';
import { TokenStorageService } from './../../../shared/services/token-storage.service';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
    selector: 'expense-tracker-business-form',
    templateUrl: './business-form.component.html',
    styleUrls: ['./business-form.component.scss'],
})
export class BusinessFormComponent implements OnInit {
    states = stateSelect;
    user!: iUser;

    public url: string = '';

    constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) {
        this.user = this.tokenStorage.getUser();
    }

    ngOnInit(): void {
        this.url = this.router.url;
    }

    onSubmit() {
        console.log('hello');
    }
}
