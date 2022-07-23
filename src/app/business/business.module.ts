import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BusinessListComponent } from './components/business-list/business-list.component';
import { BusinessNewComponent } from './components/business-new/business-new.component';
import { BusinessFormComponent } from './components/business-form/business-form.component';
import { BusinessDeleteComponent } from './components/business-delete/business-delete.component';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
import { BusinessEditComponent } from './components/business-edit/business-edit.component';

const routes: Routes = [
    {
        path: '',
        component: BusinessListComponent,
    },
    {
        path: ':slug',
        children: [
            {
                path: '',
                component: BusinessDetailComponent,
            },
            {
                path: 'edit',
                component: BusinessEditComponent,
            },
            {
                path: 'expenses',
                loadChildren: () => import('../expense/expense.module').then(m => m.ExpenseModule),
            },
        ],
    },
];

@NgModule({
    declarations: [
        BusinessListComponent,
        BusinessNewComponent,
        BusinessFormComponent,
        BusinessDeleteComponent,
        BusinessDetailComponent,
        BusinessEditComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MdbAutocompleteModule,
        MdbDatepickerModule,
        MdbFormsModule,
        MdbModalModule,
        MdbTooltipModule,
        MdbValidationModule,
    ],
})
export class BusinessModule {}
