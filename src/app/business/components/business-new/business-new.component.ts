import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
    selector: 'expense-tracker-business-new',
    templateUrl: './business-new.component.html',
    styleUrls: ['./business-new.component.scss'],
})
export class BusinessNewComponent implements OnInit {
    constructor(public modalRef: MdbModalRef<BusinessNewComponent>) {}

    ngOnInit(): void {}

    onSubmit(): void {
        console.log('first');
    }
}
