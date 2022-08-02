import { Component, OnInit } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { iUser } from 'src/app/auth/models/user';
import { TokenStorageService } from 'src/app/shared/services/token-storage/token-storage.service';
import { BusinessNewComponent } from '../business-new/business-new.component';
import { iBusiness } from '../../models/business';

@Component({
    selector: 'expense-tracker-business-list',
    templateUrl: './business-list.component.html',
    styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {
    modalRef: MdbModalRef<BusinessNewComponent> | null = null;
    user!: iUser;
    businesses: iBusiness[] = [];

    constructor(private modalService: MdbModalService, private tokenStorage: TokenStorageService) {
        this.user = this.tokenStorage.getUser();
    }

    ngOnInit(): void {}

    openModal() {
        this.modalRef = this.modalService.open(BusinessNewComponent, {
            modalClass: 'modal-dialog-centered modal-xl',
        });
    }
}
