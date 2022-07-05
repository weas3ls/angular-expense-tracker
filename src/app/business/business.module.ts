import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';

import { BusinessListComponent } from './components/business-list/business-list.component';
import { BusinessNewComponent } from './components/business-new/business-new.component';
import { BusinessFormComponent } from './components/business-form/business-form.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

const routes: Routes = [
    {
        path: '',
        component: BusinessListComponent,
    },
];

@NgModule({
    declarations: [BusinessListComponent, BusinessNewComponent, BusinessFormComponent],
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
