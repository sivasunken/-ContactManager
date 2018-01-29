import { Directive } from "@angular/core";
import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";

export function telephoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const valid = (control.value as string).length >= 7 && (control.value as string).length <= 12 && !isNaN(+control.value);
        return !valid ? { 'telephoneInvalid': { 'valid': false } } : null;
    };
}

@Directive({
    selector: '[telephoneValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: TelephoneValidatorDirective, multi: true }]
})
export class TelephoneValidatorDirective implements Validator {
    validate(c: AbstractControl): { [key: string]: any; } | null {
        return telephoneValidator()(c);
    }
}