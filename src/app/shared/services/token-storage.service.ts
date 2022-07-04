import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { iUser } from 'src/app/auth/models/user';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {
    private userSubject$: BehaviorSubject<iUser | null>;
    public user$: Observable<iUser | null>;

    constructor() {
        this.userSubject$ = new BehaviorSubject<iUser | null>(this.getUser());
        this.user$ = this.userSubject$.asObservable();
    }

    public get user(): Observable<iUser | null> {
        return this.user$;
    }

    logout(): void {
        window.sessionStorage.clear();
        this.userSubject$.next(null);
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUser(user: iUser): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        this.userSubject$.next(user);
    }

    public getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);

        if (user) return JSON.parse(user);
        return null;
    }
}
