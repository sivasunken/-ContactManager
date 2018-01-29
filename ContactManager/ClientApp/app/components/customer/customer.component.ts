import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    contact: Contact;
    contactTypes: string;
    msg: string;
    errorType: string;
    isEdit: boolean;

    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        if (this.route.snapshot.url.length > 0 && this.route.snapshot.url[0].path.includes('contact')) {
            this.contactTypes = 'customer';
            this.isEdit = false;
        }
        else {
            switch (this.route.snapshot.paramMap.get('contact')) {
                case 'customer':
                case 'supplier':
                    this.contactTypes = this.route.snapshot.paramMap.get('contact');
                    this.isEdit = true;
                    this.loadContact(+this.route.snapshot.paramMap.get('id'));
                    break;
                default:
                    this.router.navigate(['/home']);
            }
        }
    }

    loadContact(id: number) {

    }

    onSubmit(form: NgForm) {
        
    }
}