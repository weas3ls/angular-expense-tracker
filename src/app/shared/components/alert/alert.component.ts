import { Component } from '@angular/core';
import { MdbNotificationRef } from 'mdb-angular-ui-kit/notification';

@Component({
    selector: 'expense-tracker-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
    message = '';
    type = 'success';
    dismissible = false;
    timer = 2500;

    constructor(public notificationRef: MdbNotificationRef<AlertComponent>) {
        if (!this.dismissible)
            setTimeout(() => {
                this.notificationRef.close();
            }, this.timer);
    }
}
