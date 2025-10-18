import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const emailIsValid = emailRegex.test(control.value);
    if (control.value === '') {
      return null;
    }
    return emailIsValid ? null : { errorEmail: true };
  };
}

export function comparePasswords(formGroup: FormGroup) {
  const control = formGroup.get('password');
  const matchingControl = formGroup.get('repeatPassword');

  if (matchingControl?.errors && !matchingControl?.errors['differentPasswords']) {
    return;
  }

  if (control?.value === matchingControl?.value) {
    matchingControl?.setErrors(null);
  } else {
    matchingControl?.setErrors({ differentPasswords: true });
  }
}
