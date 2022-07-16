import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbSelectModule } from 'mdb-angular-ui-kit/select';

import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

@NgModule({
    declarations: [ExpenseFormComponent],
    imports: [CommonModule, MdbSelectModule],
})
export class ExpenseModule {}
