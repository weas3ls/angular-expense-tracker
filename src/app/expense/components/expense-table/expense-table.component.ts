import { dataSource } from './../../constants/DummyExpenseData';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MdbTableDirective } from 'mdb-angular-ui-kit/table';

import { Expense } from '../../models/expense';
import { ExpenseDeleteComponent } from '../expense-delete/expense-delete.component';

@Component({
    selector: 'expense-tracker-expense-table',
    templateUrl: './expense-table.component.html',
    styleUrls: ['./expense-table.component.scss'],
})
export class ExpenseTableComponent implements OnInit {
    @ViewChild('table') table!: MdbTableDirective<Expense>;

    modalRef!: MdbModalRef<ExpenseDeleteComponent>;

    constructor(private modalService: MdbModalService) {}

    openModal() {
        this.modalRef = this.modalService.open(ExpenseDeleteComponent, {
            modalClass: 'modal-sm',
        });
    }

    dataSource = dataSource;

    ngOnInit(): void {}

    headers = ['Title', 'Type', 'Date', 'Amount', 'Description', 'Actions'];

    search(event: Event): void {
        const searchTerm = (event.target as HTMLInputElement).value;
        this.table.search(searchTerm);
    }
}
