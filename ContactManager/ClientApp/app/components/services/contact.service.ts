import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../model/contact.model';

@Injectable()
export class ContactService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) {

    }

    getCustomers(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.baseUrl + "/api/customers");
    }

    getSuppliers(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.baseUrl + "/api/suppliers");
    }
}