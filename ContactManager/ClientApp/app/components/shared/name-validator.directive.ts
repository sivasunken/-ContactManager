import { Directive } from "@angular/core";
import { ValidatorFn, Validator, NG_VALIDATORS, FormGroup } from "@angular/forms";

export function nameValidator(): ValidatorFn {
    return (form: FormGroup): { [key: string]: any } => {
        const firstControl = form.get('name.first');
        const lastControl = form.get('name.last');
        const valid = firstControl && lastControl && firstControl.dirty && lastControl.dirty && ((firstControl.value + lastControl.value) as string).length < 50;
        return !valid ? { 'nameInvalid': { 'valid': false } } : null;
    };
}

@Directive({
    selector: '[nameValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }]
})
export class NameValidatorDirective implements Validator {
    validate(form: FormGroup): { [key: string]: any; } | null {
        return nameValidator()(form);
    }
}