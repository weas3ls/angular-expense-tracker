import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';

import { BusinessFormComponent } from './components/business-form/business-form.component';

@NgModule({
    declarations: [BusinessFormComponent],
    imports: [CommonModule, MdbDatepickerModule, MdbSelectModule],
})
export class BusinessModule {}
