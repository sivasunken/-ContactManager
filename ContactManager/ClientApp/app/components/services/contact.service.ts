import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../model/contact.model';

@Injectable()
export class ContactService {
    customerUrl: string
    supplierUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) {
        this.customerUrl = this.baseUrl + "api/customers";
        this.supplierUrl = this.baseUrl + "api/suppliers";
    }

    getCustomers(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.customerUrl);
    }

    getSuppliers(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.supplierUrl);
    }

    getCustomer(id: number): Observable<Contact> {
        return this.http.get<Contact>(this.customerUrl + '/' + id.toString());
    }

    getSupplier(id: number): Observable<Contact> {
        return this.http.get<Contact>(this.supplierUrl + '/' + id.toString());
    }

    postCustomer(customer: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.customerUrl, customer);
    }

    postSupplier(supplier: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.supplierUrl, supplier);
    }

    putCustomer(customer: Contact): Observable<any> {
        return this.http.put(this.customerUrl + '/' + customer.id.toString(), customer);
    }

    putSupplier(supplier: Contact): Observable<any> {
        return this.http.put(this.supplierUrl + '/' + supplier.id.toString(), supplier);
    }

    deleteCustomer(id: number): Observable<Contact> {
        return this.http.delete<Contact>(this.customerUrl + '/' + id.toString());
    }

    deleteSupplier(id: number): Observable<Contact> {
        return this.http.delete<Contact>(this.supplierUrl + '/' + id.toString());
    }
}