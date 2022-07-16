import { Component, OnInit } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { ExpenseNewComponent } from '../expense-new/expense-new.component';

@Component({
    selector: 'expense-tracker-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
    modalRef!: MdbModalRef<ExpenseNewComponent>;

    constructor(private modalService: MdbModalService) {}

    ngOnInit(): void {}

    openModal() {
        this.modalRef = this.modalService.open(ExpenseNewComponent, {
            modalClass: 'modal-dialog-centered modal-lg',
        });
    }
}
