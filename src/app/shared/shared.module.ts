import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, AlertComponent],
    imports: [CommonModule, RouterModule, MdbCollapseModule, MdbDropdownModule, MdbNotificationModule],
    exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
