import { Component, OnInit } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { iBusiness } from '../../models/business';
import { ExpenseNewComponent } from 'src/app/expense/components/expense-new/expense-new.component';

@Component({
    selector: 'expense-tracker-business-detail',
    templateUrl: './business-detail.component.html',
    styleUrls: ['./business-detail.component.scss'],
})
export class BusinessDetailComponent implements OnInit {
    business!: iBusiness;
    modalRef!: MdbModalRef<ExpenseNewComponent>;

    constructor(private modalService: MdbModalService) {}

    ngOnInit(): void {}

    openModal() {
        this.modalRef = this.modalService.open(ExpenseNewComponent, {
            modalClass: 'modal-dialog-centered modal-lg',
        });
    }
}
