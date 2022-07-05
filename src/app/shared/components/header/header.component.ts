import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../../services/token-storage.service';
import { iUser } from 'src/app/auth/models/user';

@Component({
    selector: 'expense-tracker-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    isLoggedIn = false;
    user!: iUser | null;

    constructor(private tokenStorage: TokenStorageService, private router: Router) {
        tokenStorage.user.subscribe(user => {
            this.user = user;
            if (user) this.isLoggedIn = true;
        });
        this.isLoggedIn = !!this.tokenStorage.getToken();
    }

    logout() {
        this.isLoggedIn = false;
        this.tokenStorage.logout();
        this.router.navigate(['/login']);
    }
}
