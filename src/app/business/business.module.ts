import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';

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
        MdbDatepickerModule,
        MdbModalModule,
        MdbSelectModule,
        MdbTooltipModule,
    ],
})
export class BusinessModule {}
