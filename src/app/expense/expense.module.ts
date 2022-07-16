import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseNewComponent } from './components/expense-new/expense-new.component';

const routes: Routes = [
    {
        path: '',
        component: ExpenseListComponent,
    },
];

@NgModule({
    declarations: [ExpenseFormComponent, ExpenseListComponent, ExpenseNewComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), MdbSelectModule, MdbValidationModule],
})
export class ExpenseModule {}
