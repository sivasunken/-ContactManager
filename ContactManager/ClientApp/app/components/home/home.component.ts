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
        this.contactService.getCustomers()
            .subscribe(resp => {
                this.customers = resp;
            });
        this.contactService.getSuppliers()
            .subscribe(resp => {
                this.suppliers = resp;
            });
    }

    onDeleteCustomerClick(customer: Contact) {
        this.contactService.deleteCustomer(customer.id)
            .subscribe(resp => {
                this.loadData();
            }, error => {
                alert("Error: " + error);
            });
    }

    onDeleteSupplierClick(supplier: Contact) {
        this.contactService.deleteSupplier(supplier.id)
            .subscribe(res=>{
                this.loadData();
            }, error => {
                alert("Error: " + error);
            })
    }
}
