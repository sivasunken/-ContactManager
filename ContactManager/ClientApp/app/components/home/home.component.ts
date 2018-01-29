import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../model/contact.model';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    customers: Contact[] = [];
    suppliers: Contact[] = [];

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
        this.loadData()
    }

    loadData() {
        this.contactService.getCustomers().take(1)
            .subscribe(resp => {
                this.customers = resp;
            });
        this.contactService.getSuppliers().take(1)
            .subscribe(resp => {
                this.suppliers = resp;
            });
    }
}
