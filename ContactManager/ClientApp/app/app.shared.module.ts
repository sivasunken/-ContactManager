import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ContactService } from './components/services/contact.service';
import { EmailValidatorDirective } from './components/shared/email-validator.directive';
import { NameValidatorDirective } from './components/shared/name-validator.directive';
import { TelephoneValidatorDirective } from './components/shared/telephone-validator.directive';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CustomerComponent,
        EmailValidatorDirective,
        NameValidatorDirective,
        TelephoneValidatorDirective
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        AlertModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: CustomerComponent },
            { path: ':contact/:id', component: CustomerComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        ContactService
    ]
})
export class AppModuleShared {
}
