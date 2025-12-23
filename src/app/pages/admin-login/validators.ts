import { FormGroup } from '@angular/forms';

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
