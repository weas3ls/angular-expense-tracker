import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
    selector: 'expense-tracker-expense-delete',
    templateUrl: './expense-delete.component.html',
    styleUrls: ['./expense-delete.component.scss'],
})
export class ExpenseDeleteComponent implements OnInit {
    constructor(public modalRef: MdbModalRef<ExpenseDeleteComponent>) {}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    close(): void {
        const closeMessage = 'Modal closed';
        this.modalRef.close(closeMessage);
    }
}
