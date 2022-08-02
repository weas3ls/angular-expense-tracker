import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, AlertComponent, TruncatePipe, PageTitleComponent],
    imports: [CommonModule, RouterModule, MdbCollapseModule, MdbDropdownModule, MdbNotificationModule],
    exports: [HeaderComponent, FooterComponent, PageTitleComponent, TruncatePipe],
})
export class SharedModule {}
