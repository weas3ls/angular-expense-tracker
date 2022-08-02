import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenStorageService } from 'src/app/shared/services/token-storage/token-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private tokenStorage: TokenStorageService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const user = this.tokenStorage.getUser();

        if (user) return true;

        // not logged in, redirect to login page with redirect url
        this.router.navigate(['/auth/login'], {
            queryParams: { returnUrl: state.url },
        });
        return false;
    }
}
