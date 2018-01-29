import { Directive } from "@angular/core";
import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";
import * as EmailValidator from 'email-validator';

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const valid = EmailValidator.validate(control.value);
        return !valid ? { 'emailInvalid': { 'valid': false } } : null;
    };
}

@Directive({
    selector: '[emailValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
    validate(c: AbstractControl): { [key: string]: any; } | null {
        return emailValidator()(c);
    }
}