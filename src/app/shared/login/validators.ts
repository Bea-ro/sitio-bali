import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function passwordRequirements(): ValidatorFn {
  return (control: AbstractControl) => {
    const passRegex = /^(?=.*?[a-z])(?=.*?[A-Z]).{6,}$/;
    const passIsValid = passRegex.test(control.value);
    if (control.value === '') {
      return null;
    }
    return passIsValid ? null : { password: true };
  };
}

export function comparePasswords(formGroup: FormGroup) {
  const control = formGroup.get('password');
  const matchingControl = formGroup.get('repeatPassword');

  if (matchingControl?.errors && !matchingControl?.errors['differentPasswords']) {
    return;
  }

  control?.value === matchingControl?.value
    ? matchingControl?.setErrors(null)
    : matchingControl?.setErrors({ differentPasswords: true });
}
