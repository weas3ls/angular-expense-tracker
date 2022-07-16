import { Component, OnInit } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { BusinessDeleteComponent } from '../business-delete/business-delete.component';

@Component({
    selector: 'expense-tracker-business-edit',
    templateUrl: './business-edit.component.html',
    styleUrls: ['./business-edit.component.scss'],
})
export class BusinessEditComponent implements OnInit {
    modalRef!: MdbModalRef<BusinessDeleteComponent>;

    constructor(private modalService: MdbModalService) {}

    openModal() {
        this.modalRef = this.modalService.open(BusinessDeleteComponent, {
            modalClass: 'modal-dialog-centered modal-md',
        });
    }

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
