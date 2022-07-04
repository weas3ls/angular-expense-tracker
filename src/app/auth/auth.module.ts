import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
];

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), MdbFormsModule, MdbValidationModule],
})
export class AuthModule {}
