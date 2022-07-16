import { Component, OnInit } from '@angular/core';

import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
    selector: 'expense-tracker-expense-new',
    templateUrl: './expense-new.component.html',
    styleUrls: ['./expense-new.component.scss'],
})
export class ExpenseNewComponent implements OnInit {
    constructor(public modalRef: MdbModalRef<ExpenseNewComponent>) {}

    ngOnInit(): void {}
}
