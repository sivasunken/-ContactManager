import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

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
    isEdit: boolean = false;
    bsConfig: BsDatepickerConfig;

    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.bsConfig = new BsDatepickerConfig();
        this.bsConfig.containerClass = 'theme-default';
        this.bsConfig.maxDate = new Date();
    }

    ngOnInit(): void {
        if (this.route.snapshot.url.length > 0 && this.route.snapshot.url[0].path.includes('contact')) {
            this.contact = new Contact();
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
                    break;
            }
        }
    }

    loadContact(id: number) {
        switch (this.contactTypes) {
            case 'customer':
                this.contactService.getCustomer(id)
                    .subscribe(resp => {
                        this.contact = resp;
                    }, error => {
                        alert("Error: " + error);
                    });
                break;
            case 'supplier':
                this.contactService.getSupplier(id)
                    .subscribe(resp => {
                        this.contact = resp;
                    }, error => {
                        alert("Error: " + error);
                    });
                break;
            default:
                break;
        }
    }

    onSubmit() {
        switch (this.contactTypes) {
            case 'customer':
                if (this.isEdit)
                    this.contactService.putCustomer(this.contact)
                        .subscribe(resp => {
                            this.router.navigate(['/home']);
                        }, error => {
                            alert("Error: " + error);
                        });
                else
                    this.contactService.postCustomer(this.contact)
                        .subscribe(resp => {
                            this.router.navigate(['/home']);
                        }, error => {
                            alert("Error: " + error);
                        });
                break;
            case 'supplier':
                if (this.isEdit)
                    this.contactService.putSupplier(this.contact)
                        .subscribe(resp => {
                            this.router.navigate(['/home']);
                        }, error => {
                            alert("Error: " + error);
                        });
                else
                    this.contactService.postSupplier(this.contact)
                        .subscribe(resp => {
                            this.router.navigate(['/home']);
                        }, error => {
                            alert("Error: " + error);
                        });
                break;
            default:
                break;
        }
    }
}