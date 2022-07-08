import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { iUser } from 'src/app/auth/models/user';
import { iBusiness } from '../../models/business';

@Component({
    selector: 'expense-tracker-business-detail',
    templateUrl: './business-detail.component.html',
    styleUrls: ['./business-detail.component.scss'],
})
export class BusinessDetailComponent implements OnInit {
    business!: iBusiness;

    constructor() {}

    ngOnInit(): void {}
}
