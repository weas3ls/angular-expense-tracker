import { Component } from '@angular/core';
import { MdbNotificationRef } from 'mdb-angular-ui-kit/notification';

@Component({
    selector: 'expense-tracker-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
    message!: string;
    type!: string;
    dismissable: boolean = false;
    timer: number = 4500;

    constructor(public notificationRef: MdbNotificationRef<AlertComponent>) {
        if (!this.dismissable)
            setTimeout(() => {
                this.notificationRef.close();
            }, this.timer);
    }
}
