import { Component } from '@angular/core';

@Component({
    selector: 'expense-tracker-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    isLoggedIn = false;

    constructor() {}

    logout() {}
}
