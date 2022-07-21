import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { ExpenseDeleteComponent } from '../expense-delete/expense-delete.component';

@Component({
    selector: 'expense-tracker-expense-edit',
    templateUrl: './expense-edit.component.html',
    styleUrls: ['./expense-edit.component.scss'],
})
export class ExpenseEditComponent {
    modalRef!: MdbModalRef<ExpenseDeleteComponent>;

    constructor(private modalService: MdbModalService) {}

    openModal() {
        this.modalRef = this.modalService.open(ExpenseDeleteComponent, {
            modalClass: 'modal-dialog-centered modal-sm',
        });
    }
}
