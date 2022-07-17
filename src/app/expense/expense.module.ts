import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { SharedModule } from '../shared/shared.module';

import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseNewComponent } from './components/expense-new/expense-new.component';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';

const routes: Routes = [
    {
        path: '',
        component: ExpenseListComponent,
    },
];

@NgModule({
    declarations: [ExpenseFormComponent, ExpenseListComponent, ExpenseNewComponent, ExpenseTableComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule,
        MdbDatepickerModule,
        MdbSelectModule,
        MdbTableModule,
        MdbValidationModule,
    ],
})
export class ExpenseModule {}
