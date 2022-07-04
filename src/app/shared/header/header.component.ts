import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../services/token-storage.service';
import { iUser } from 'src/app/auth/models/user';

@Component({
    selector: 'expense-tracker-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    isLoggedIn = false;
    user!: iUser | null;

    constructor(private tokenStorageService: TokenStorageService, private router: Router) {
        tokenStorageService.user.subscribe(user => {
            this.user = user;
            if (user) this.isLoggedIn = true;
        });
        this.isLoggedIn = !!this.tokenStorageService.getToken();
    }

    logout() {
        this.isLoggedIn = false;
        this.tokenStorageService.logout();
        this.router.navigate(['/login']);
    }
}
