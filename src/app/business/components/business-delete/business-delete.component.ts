import { Component } from '@angular/core';

import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
    selector: 'expense-tracker-business-delete',
    templateUrl: './business-delete.component.html',
    styleUrls: ['./business-delete.component.scss'],
})
export class BusinessDeleteComponent {
    constructor(public modalRef: MdbModalRef<BusinessDeleteComponent>) {}

    close(): void {
        const closeMessage = 'Modal closed';
        this.modalRef.close(closeMessage);
    }
}
